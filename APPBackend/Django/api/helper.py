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
from api.models import Process, Package, Variable, FileType
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
    logger.debug(command)
    return command.split(' ')

def get_values(process, package):
    values = {}
    values['tar_path'] = os.path.join(package.workdir, package.file_name)
    values['workdir'] = package.workdir
    values['tar_name'] = package.file_name

    # update values with data from form:
    for key, val in process.value.items():
        if isinstance(val, bool):
            if val == True:
                # get value from form instead
                for item in process.module.form:
                    # logger.error(process.module.form)
                    # print(item)
                    # logger.info('item: ' + item)
                    if item['identifier'] == key:
                        if 'value' in item:
                            values[key] = item['value']
                        else:
                            values[key] = key
        else:
            values[key] = val
    return values

def AnalyseLog(resultFilter, log):
    for resFilter in resultFilter:
        pattern = resFilter['value']
        match = re.match(pattern, log)

        logger.info(resFilter)

        if match and resFilter['type'] != "Containing":
            # logger.error(log)
            return (-1, log)
        elif not match and resFilter['type'] == "Containing":
            # logger.error(log)
            return (-1, log)
    return (1, "")


def errorHappend(fileName=""):
    var = Variable.objects.get(name='total_number_of_errors')
    value = int(var.data)
    var.data = value + 1
    var.save()
    # var.save()
    if fileName != "":
        fileType = fileName.split('.')[-1].upper()
        try:
            ft = FileType.objects.get(name=fileType)
            ft.errors += 1
            ft.save()
        except FileType.DoesNotExist:
            ft = FileType(name=fileType, errors=1)
            ft.save()
