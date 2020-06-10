__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from logging import getLogger
import subprocess
import traceback, tempfile


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
        logger.info('Running bash command in app_worker: ' + str(args))

        try:
            tempLOG = tempfile.TemporaryFile()
            tempERR = tempfile.TemporaryFile()
            p = subprocess.Popen(' '.join(args), stdout=tempLOG, stderr=tempERR, shell=True)

            stdout, stderr = p.communicate()
            p.wait()

            tempLOG.seek(0)
            stdout = tempLOG.read()

            tempERR.seek(0)
            stderr = tempERR.read()

            tempLOG.close()
            tempERR.close()
            logger.info("Command finished")
            logger.info('stdout' + stdout.decode('utf-8'))
            logger.info('stderr' + stderr.decode('utf-8'))
            p.kill()
            if stdout and stdout != None:
                log = stdout.decode('utf-8')
                self.logger.info(log)
            if stderr and stderr != None:
                error = stderr.decode('utf-8')
                self.logger.error(error)
                return (-1, log + error)
        except:
            logger.error(traceback.format_exc())
            error = traceback.format_exc()
            return (-1, error)

        # logger.info(error)
        return (1, log)

