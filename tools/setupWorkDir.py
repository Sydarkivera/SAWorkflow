__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GPL"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

import os
from shutil import copy
import uuid
from config import settings

from logging import getLogger
import logging
logger = getLogger('background_task')

def execute(process, package):
    dest = os.path.join(settings.PACKAGE_IN_PROGRESS_PATH, str(uuid.uuid4()))
    logdir = os.path.join(dest, 'log')
    package.logdir = logdir
    try:
        # cant start logging before folder in place.
        if not os.path.exists(dest):
            os.makedirs(dest)
        if not os.path.exists(logdir):
            os.makedirs(logdir)
        package.workdir = dest
        package.save()
    except IOError:
        logger.error("I/O error({0}): {1}".format(e.errno, e.strerror))
        return -1

    #setup logger
    logger = logging.getLogger('setupWorkDir')
    formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s')
    logger.setLevel(logging.DEBUG)

    log_hdlr = logging.FileHandler(os.path.join(logdir, 'setupWorkDir.log'))
    process.log_path = os.path.join(logdir, 'setupWorkDir.log')
    log_hdlr.setFormatter(formatter)
    log_hdlr.setLevel(logging.INFO)
    logger.addHandler(log_hdlr)
    err_hdlr = logging.FileHandler(os.path.join(logdir, 'setupWorkDir.err'))
    process.err_path = os.path.join(logdir, 'setupWorkDir.err')
    err_hdlr.setFormatter(formatter)
    err_hdlr.setLevel(logging.ERROR)
    logger.addHandler(err_hdlr)
    process.save()

    logger.info('Loggfiles and project directory created')

    try:
        copy(package.path, dest)
    except IOError:
        logger.error("I/O error({0}): {1}".format(e.errno, e.strerror))
        return -1

    logger.info('Package copied to workdir')

    #tear down logger
    logger.removeHandler(log_hdlr)
    logger.removeHandler(err_hdlr)
    del logger, log_hdlr, err_hdlr

    return 1
