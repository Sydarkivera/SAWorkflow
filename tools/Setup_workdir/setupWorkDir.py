__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

import os
from shutil import copy
import uuid
from config import settings
from api.tasks import pythonModuleBase
from api.models import Variable

import logging

class task(pythonModuleBase):

    def setupLogging(self, process, package):
        logger = logging.getLogger('background_task')
        workdir_path = Variable.objects.get(name='work_dir_path').data
        dest = os.path.join(workdir_path, str(uuid.uuid4()))
        package.logdir = os.path.join(dest, 'log')
        try:
            # cant start logging before folder in place.
            if not os.path.exists(dest):
                os.makedirs(dest)
            if not os.path.exists(package.logdir):
                os.makedirs(package.logdir)
            package.workdir = dest
            package.save()
        except IOError:
            logger.error("I/O error({0}): {1}".format(e.errno, e.strerror))
            return -1

        super(task, self).setupLogging(process, package)

    def execute(self, process, package, values):

        self.logger.info('Loggfiles and project directory created')

        try:
            copy(package.path, package.workdir)
        except IOError:
            self.logger.error("I/O error({0}): {1}".format(e.errno, e.strerror))
            return (-1, "I/O error({0}): {1}".format(e.errno, e.strerror))

        self.logger.info('Package copied to workdir')

        return (1, "")
