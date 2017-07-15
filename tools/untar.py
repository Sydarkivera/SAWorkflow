__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GPL"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

import os
from config import settings

from logging import getLogger
import logging
import json


logger = getLogger('background_task')

import subprocess


def execute(process, package):
    #setup logger
    logger = logging.getLogger('untar')
    formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s')
    logger.setLevel(logging.DEBUG)

    log_hdlr = logging.FileHandler(os.path.join(package.logdir, 'untar.log'))
    process.log_path = os.path.join(package.logdir, 'untar.log')
    log_hdlr.setFormatter(formatter)
    log_hdlr.setLevel(logging.INFO)
    logger.addHandler(log_hdlr)
    err_hdlr = logging.FileHandler(os.path.join(package.logdir, 'untar.err'))
    process.err_path = os.path.join(package.logdir, 'untar.err')
    err_hdlr.setFormatter(formatter)
    err_hdlr.setLevel(logging.ERROR)
    logger.addHandler(err_hdlr)
    process.save()

    # content:
    retval = 1

    # options: verbose, remove archive, ...
    args = ['tar' ,'-x']
    # logger.info(process.value)
    values = json.loads(process.value)
    if 'verbose' in values:
        if values['verbose'] == True:
            args.append('-v')
    args = args + ['-f', os.path.join(package.workdir, package.file_name)]
    args = args + ['-C', package.workdir]

    os.setuid(os.geteuid())
    p = subprocess.Popen(args, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)

    stdout, stderr = p.communicate()
    if stdout:
        logger.info(stdout.decode('utf-8'))
    if stderr:
        logger.error(stderr.decode('utf-8'))
        retval = -1
    #tear down logger
    logger.removeHandler(log_hdlr)
    logger.removeHandler(err_hdlr)
    del logger, log_hdlr, err_hdlr

    return retval
