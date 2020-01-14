__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from background_task import background
from django.core.exceptions import ObjectDoesNotExist
from api.models import Module, Package, Process, Template, Variable, FileType, Job, GraphData
from logging import getLogger
import importlib
import time
import traceback
import logging
import os
import subprocess
import pwd
import re
import docker
from docker.types import Mount
import uuid
import shutil
from xmlGenerator.xmlGenerator import *
from xmlGenerator.xmlExtensions import inlineUUIDModule, inlineDatetimeModule
import datetime

from celery import Celery
from celery.schedules import crontab
from config.celeryconf import app
from celery.decorators import task
from datetime import timedelta
from celery.task import periodic_task
from time import sleep
# include helper functions for building a command
from api.helper import fixCommand, get_values, errorHappend, calculateFileType
from api.worker.helper import send_request

# making http request to another server for smart docker module
import requests

logger = getLogger('background_task')

class BaseModule:
  """
  This is a base module which all other module should extend. Some of the extensions are a python module, a docker module and a bash module.
  """
  def __init__(self):
    pass

  def setupLogging(self, process, package):
    """
    Setup logging for the current process. The files will be created in the pacakge's workdir as "background_tassk.<moduleName>.log
    """

    logName = "".join(x for x in process.module.name if x.isalnum())

    self.logger = logging.getLogger('background_task.' + 
        process.module.name + str(package.package_id))
    formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s')
    self.logger.setLevel(logging.DEBUG)

    process.log_path = os.path.join(package.logdir, logName + '.log')
    process.err_path = os.path.join(package.logdir, logName + '.err')
    self.log_hdlr = logging.FileHandler(process.log_path)
    self.log_hdlr.setFormatter(formatter)
    self.log_hdlr.setLevel(logging.INFO)
    self.logger.addHandler(self.log_hdlr)
    self.err_hdlr = logging.FileHandler(process.err_path)
    self.err_hdlr.setFormatter(formatter)
    self.err_hdlr.setLevel(logging.ERROR)
    self.logger.addHandler(self.err_hdlr)
    process.save()

  def execute(self, process, package, values):
    """
    Override to execute the specific module. The base does not do anything.
    """
    pass

  def setup(self, process, package, values):
    """
    Override to add custom setup before every execution.
    """
    pass

  def run(self, process, package):
    """
    Every module is started from 
    """

    logger.info('started running module of name: ' + process.module.name)
    # do all preparations that is the same for all modules:

    # set default values
    values = get_values(process, package)

    retval = 1

    logger.debug('run values updated')

    # setup extra
    self.setup(process, package, values)

    errorFiles = []
    logs = []

    # check filter.
    filter = process.module.filter
    if filter == '':
      # run once.
      logger.debug('run no filter start')
      res, logText = self.execute(process, package, values)
      # if there is an error, store it and return -1
      if res == -1:
        logger.error(logText)
        process.errors = [{'file': 'All files', 'log': logText}]
        process.save()
        return -1
      else:
        process.logs = [{'file': 'All files', 'log': logText}]
        process.save()

      logger.debug('run no filter done')
    else:
      logger.debug('run filter start')
      # setup regex
      allFiles = self.get_all_files(package, process)

      logger.debug('run filter file list generated')
      numberOfFiles = len(allFiles)
      i = 0
      retval = 1
      for i in range(numberOfFiles):
        f = allFiles[i]
        if not f['status']:
          fileName = f['file']
          values['file'] = fileName
          logger.debug('run filter before execute')
          res, logText = self.execute(process, package, values)
          logger.debug('run filter after execute')
          if res == -1:
            allFiles[i]['status'] = False
            errorDict = {}
            errorDict['file'] = fileName
            errorDict['log'] = logText
            errorFiles.append(errorDict)
            errorHappend(fileName)
            retval = -1
          else:
            allFiles[i]['status'] = True
            logs.append({'file': fileName, 'log': logText})
          process.errors = errorFiles
          process.logs = logs
          process.progress = (i + 1) / numberOfFiles * 100
          process.allFiles = allFiles
          process.save()
    self.teardown(process, package, values)
    # calculate the new filetype split
    package.statistics['fileTypes'], package.statistics['total_number_of_files'], package.statistics['total_size'] = calculateFileType(
        package.workdir)

    package.save()

    logger.info('finished running module of name: ' + process.module.name)
    return retval

  def teardown(self, process, package, values):
    """
    Override to add custom teardown.
    """
    pass

  def AnalyseLog(self, process, log):
    """
    A method for analysing the resulting log file based on the filter added to the tool.
    """
    for resFilter in process.module.resultFilter:
      pattern = resFilter['value']
      match = re.match(pattern, log)
      logger.info(resFilter)

      if match and resFilter['type'] != "Containing":
          # logger.info(match)
        self.logger.error(log)
        return (-1, log)
      elif not match and resFilter['type'] == "Containing":
        self.logger.error(log)
        return (-1, log)
    return (1, "")

  def teardownLogging(self):
    """
    As it says, remvoe the logger when the module is done executing.
    """
    self.logger.removeHandler(self.log_hdlr)
    self.logger.removeHandler(self.err_hdlr)
    del self.logger, self.log_hdlr, self.err_hdlr

  def get_all_files(self, package, process):
    """
    Get a list of all the files in the package that matches the pattern.
    """
    filter = process.module.filter
    try:
      pattern = re.compile(filter)
    except:
      # self.logger.error('Regex is invalid: ' + filter)
      logger.error('Regex is invalid: ' + filter)
      return -1

    # logger.info('run filter regex generated')
    # calculate which files that should be run:
    allFiles = []
    if process.allFiles == []:
      for root, _, files in os.walk(package.workdir):
        for name in files:
          file = os.path.join(root, name)
          if pattern.match(file):
            allFiles.append({"file": file, "status": False})
      process.allFiles = allFiles
      process.save()
    else:
      allFiles = process.allFiles
    return allFiles