__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from background_task import background
from django.core.exceptions import ObjectDoesNotExist
from api.models import Module, Package, Process
from logging import getLogger
import importlib
import time
import traceback
import logging
import os
import subprocess
import pwd

logger = getLogger('background_task')

class pythonModuleBase:

    def __init__(self):
        pass

    def setupLogging(self, process, package):
        self.logger = logging.getLogger(process.module.name + str(package.package_id))
        formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s')
        self.logger.setLevel(logging.DEBUG)

        process.log_path = os.path.join(package.logdir, process.module.name + '.log')
        process.err_path = os.path.join(package.logdir, process.module.name + '.err')
        self.log_hdlr = logging.FileHandler(process.log_path)
        self.log_hdlr.setFormatter(formatter)
        self.log_hdlr.setLevel(logging.INFO)
        self.logger.addHandler(self.log_hdlr)
        self.err_hdlr = logging.FileHandler(process.err_path)
        self.err_hdlr.setFormatter(formatter)
        self.err_hdlr.setLevel(logging.ERROR)
        self.logger.addHandler(self.err_hdlr)
        process.save()

    def execute(self, process, package):
        pass

    def teardownLogging(self):
        self.logger.removeHandler(self.log_hdlr)
        self.logger.removeHandler(self.err_hdlr)
        del self.logger, self.log_hdlr, self.err_hdlr

class bashModule(pythonModuleBase):

    def execute(self, process, package):
        retval = 1
        values = {}
        values['tar_path'] = os.path.join(package.workdir, package.file_name)
        values['workdir'] = package.workdir
        values['file_name'] = package.file_name
        values.update(process.value)
        args = []
        for arg in process.module.command:
            if arg['type'] == "text":
                args += [arg['value']]
            elif arg['type'] == 'var':
                if arg['name'] in values:
                    if 'value' in arg:
                        if values[arg['name']] == True:
                            args += [arg['value']]
                    else:
                        args += [values[arg['name']]]
            else:
                self.logger.error('unknown type: ' + str(arg['type']))

        p = subprocess.Popen(args, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)

        stdout, stderr = p.communicate()
        if stdout:
            self.logger.info(stdout.decode('utf-8'))
        if stderr:
            self.logger.error(stderr.decode('utf-8'))
            retval = -1

        return retval

@background(schedule=1)
def executeProcessFlow(package_id):
    # get list of all processes in package.
    # execute the processes one by one.
    try:
        package = Package.objects.get(pk=package_id)
    except ObjectDoesNotExist:
        logger.error("The selected package does not exist")
        return
    # os.setuid(pwd.getpwnam('apache').pw_uid) # production
    for process in package.processes.all():
        if process.status != Process.PROCESS_STATUS_DONE:
            process.status=Process.PROCESS_STATUS_RUNNING
            process.save()
            if process.module.type == Module.MODULE_TYPE_PYTHON:
                # time.sleep(10)
                logger.debug('importing module')
                module = importlib.import_module(process.module.python_module)
                res = -1
                try:
                    obj = module.task()
                    obj.setupLogging(process, package)
                    res = obj.execute(process, package)
                    obj.teardownLogging()
                except Exception as e:
                    logger.error('Running module: %s failed' % process.module.python_module)
                    logger.error(traceback.format_exc())
                    process.status = Process.PROCESS_STATUS_ERROR
                    package.status = Package.PACKAGE_STATUS_ERROR
                    process.save()
                    break
                if res == 1:
                    process.status=Process.PROCESS_STATUS_DONE
                    process.save()
                else:
                    process.status = Process.PROCESS_STATUS_ERROR
                    package.status = Package.PACKAGE_STATUS_ERROR
                    process.save()
                    break
            elif process.module.type == Module.MODULE_TYPE_COMMAND:
                res = -1
                try:
                    obj = bashModule()
                    obj.setupLogging(process, package)
                    res = obj.execute(process, package)
                    obj.teardownLogging()
                except Exception as e:
                    logger.error('Running module: %s failed' % process.module.python_module)
                    logger.error(traceback.format_exc())
                    process.status = Process.PROCESS_STATUS_ERROR
                    package.status = Package.PACKAGE_STATUS_ERROR
                    process.save()
                    break
                if res == 1:
                    process.status=Process.PROCESS_STATUS_DONE
                    process.save()
                else:
                    process.status = Process.PROCESS_STATUS_ERROR
                    package.status = Package.PACKAGE_STATUS_ERROR
                    process.save()
                    break


    if package.status != Package.PACKAGE_STATUS_ERROR:
        package.status = Package.PACKAGE_STATUS_DONE

    package.save()


@background()
def SearchForNewPackages():
    logger.info('background_task running')
