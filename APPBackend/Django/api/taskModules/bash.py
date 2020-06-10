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
        # try:
        #     stdout = subprocess.check_output(' '.join(args), shell=True)
        # except subprocess.CalledProcessError as e:
        #     self.logger.error('Command returned error: ' + str(e.output.decode('utf-8')))
        #     return (-1, e.output.decode('utf-8'))

        # log = ''
        # if stdout:
        #     log = stdout.decode('utf-8')
        #     self.logger.debug('Command finished with output: ' + str(log))
        #     self.AnalyseLog(process, log)
        # return (1, log)

        try:
            tempLOG = tempfile.TemporaryFile()
            tempERR = tempfile.TemporaryFile()
            p = subprocess.Popen(' '.join(args), stdout=tempLOG, stderr=tempERR, shell=True)
            
            # p = subprocess.check_output(command, shell=True)

            stdout, stderr = p.communicate()
            # logger.info(stdout)
            # logger.info(stderr)
            p.wait()

            tempLOG.seek(0)
            # print(tempLOG.read())
            stdout = tempLOG.read()

            tempERR.seek(0)
            # print(tempERR.read())
            stderr = tempERR.read()

            tempLOG.close()
            tempERR.close()
            logger.info("Command finished")
            # logger.info(p.returncode)
            logger.info('stdout' + stdout.decode('utf-8'))
            logger.info('stderr' + stderr.decode('utf-8'))
            p.kill()
            if stdout and stdout != None:
                log = stdout.decode('utf-8')
            if stderr and stderr != None:
                error = stderr.decode('utf-8')
                return (-1, log + error)
                # logger.error(error)
                # retval = (-1, stderr.decode('utf-8'))
        except:
            logger.error(traceback.format_exc())
            error = traceback.format_exc()
            return (-1, error)

        # logger.info(error)
        return (1, log)

