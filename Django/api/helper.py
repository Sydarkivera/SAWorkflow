__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2018, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

# imports regex
import re
# process django model
from api.models import Process, Package
# os for file apth modifications
import os

from logging import getLogger
logger = getLogger('django')

def fixCommand(process, values):

    # search with regex.
    prog = re.compile("#[A-z0-9_-]+")  # match all variables.
    command = process.module.command
    result = prog.search(command)
    while result:
        # handle match
        var = result.group(0)
        var = var[1:]  # skip the first hashtag when searching for a match
        if var in values:
            command = command[:result.start(
                0)] + values[var] + command[result.end(0):]
        else:
            command = command[:result.start(0)] + command[result.end(0):]
            # args[i] = ""
        result = prog.search(command)
    logger.info(command)
    return command.split(' ')

def get_values(process, package):
    values = {}
    values['tar_path'] = os.path.join(package.workdir, package.file_name)
    values['workdir'] = package.workdir
    values['file_name'] = package.file_name

    # update values with data from form:
    for key, val in process.value.items():
        if isinstance(val, bool):
            if val == True:
                # get value from form instead
                for item in process.module.form:
                    # logger.error(item)
                    if item['identifier'] == key:
                        if 'value' in item:
                            values[key] = item['value']
                        else:
                            values[key] = key
        else:
            values[key] = val
    return values
