__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GPL"
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

logger = getLogger('background_task')

@background(schedule=1)
def executeProcessFlow(package_id):
    # get list of all processes in package.
    # execute the processes one by one.
    try:
        package = Package.objects.get(pk=package_id)
    except ObjectDoesNotExist:
        logger.error("The selected package does not exist")
        return

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
                    res = module.execute(process, package)
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
