__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GPL"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from api.tasks import pythonModuleBase
import os
import json
import subprocess

class task(pythonModuleBase):
    def execute(self, process, package):
        retval = 1
        # options: verbose, remove archive, ...
        args = ['tar' ,'-x']
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
            self.logger.info(stdout.decode('utf-8'))
        if stderr:
            self.logger.error(stderr.decode('utf-8'))
            retval = -1

        if 'delete_archive' in values:
            if values['delete_archive'] == True:
                self.logger.info("Deleting .tar archive")
                os.remove(os.path.join(package.workdir, package.file_name))
                self.logger.info(".tar file deleted")

        return retval
