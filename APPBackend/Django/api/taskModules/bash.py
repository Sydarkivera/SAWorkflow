__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from logging import getLogger
import subprocess


# include helper functions for building a command
from api.helper import fixCommand
from api.taskModules.base import BaseModule

logger = getLogger('background_task')

class BashModule(BaseModule):

    def execute(self, process, package, values):
        """
        Override execute to execute a bash command. Use the fixCommand helper to generate the command with substituted variables
        """
        args = fixCommand(process, values)
        logger.debug(args)
        try:
            stdout = subprocess.check_output(' '.join(args), shell=True)
        except subprocess.CalledProcessError as e:
            self.logger.error(e.output.decode('utf-8'))
            return (-1, e.output.decode('utf-8'))

        log = ''
        if stdout:
            # self.logger.info('File: ' + )
            log = stdout.decode('utf-8')
            self.logger.debug(log)
            self.AnalyseLog(process, log)
        return (1, log)

