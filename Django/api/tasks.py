__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from background_task import background
from django.core.exceptions import ObjectDoesNotExist
from api.models import Module, Package, Process, Template, Variable, FileType
from logging import getLogger
import importlib
import time
import traceback
import logging
import os
import subprocess
import pwd
import re
import docker

from celery import Celery
from celery.schedules import crontab
from config.celeryconf import app
from celery.decorators import task
from datetime import timedelta
from celery.task import periodic_task

logger = getLogger('background_task')

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


class pythonModuleBase:

    def __init__(self):
        pass

    def setupLogging(self, process, package):

        # sanitiza log filename
        logName = "".join(x for x in process.module.name if x.isalnum())

        self.logger = logging.getLogger(process.module.name + str(package.package_id))
        formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s')
        self.logger.setLevel(logging.DEBUG)

        process.log_path = os.path.join(package.logdir, logName + '.log')
        process.err_path = os.path.join(package.logdir, logName + '.err')
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

    def run(self, values, process):
        args = process.module.command.split(' ')
        for i in range(len(args)):
            arg = args[i]
            if arg[0] == '#':
                # a variable is identified, resolve it.
                if arg[1:] in values:
                    args[i] = values[arg[1:]]
                else:
                    args[i] = ""
        # args = []
        # for arg in process.module.command:
        #     if arg['type'] == "text":
        #         args += [arg['value']]
        #     elif arg['type'] == 'var':
        #         if arg['name'] in values:
        #             if 'value' in arg:
        #                 if values[arg['name']] == True:
        #                     args += [arg['value']]
        #             else:
        #                 args += [values[arg['name']]]
        #     else:
        #         self.logger.error('unknown type: ' + str(arg['type']))

        p = subprocess.Popen(args, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)

        stdout, stderr = p.communicate()

        #validate output, check if there are any error, or if there are errors in the info file.

        if stderr:
            self.logger.error(stderr.decode('utf-8'))
            return (-1, stderr.decode('utf-8'))

        if stdout:
            # self.logger.info('File: ' + )
            self.logger.info(stdout.decode('utf-8'))
            for resFilter in process.module.resultFilter:
                # check if the pattern exists
                text = stdout.decode('utf-8')
                pattern = resFilter['value']
                # pattern = '[\s,.]*(compliant)'
                # text = '<validationReports compliant="1" nonCompliant="0" failedJobs="0">1</validationReports>'
                match = re.match(pattern, text)
                # logger.info(match)
                # logger.info('')

                if match and resFilter['type'] != "Containing":
                    # logger.info(match)
                    # logger.info()
                    self.logger.error(text)
                    return (-1, text)
                elif not match and resFilter['type'] == "Containing":
                    self.logger.error(text)
                    return (-1, text)
        return (1, "")

    def execute(self, process, package):
        retval = 1
        values = {}
        values['tar_path'] = os.path.join(package.workdir, package.file_name)
        values['workdir'] = package.workdir
        values['file_name'] = package.file_name
        # values.update(process.value)
        #update values with data from form:
        for key, val in process.value.items():
            if isinstance(val, bool):
                if val == True:
                    # get value from form instead
                    for item in process.module.form:
                        if item['identifier'] == key:
                            values[key] = item['value']
            else:
                values[key] = val

        filter = process.module.filter
        if filter == '':
            res, errorText = self.run(values, process)
            if res == -1:
                return -1
        else:
            try:
                pattern = re.compile(filter)
            except:
                self.logger.error('Regex is invalid: ' + filter)
                return -1

            # count number of files:
            allFiles = []
            errorFiles = []
            if process.allFiles == []:
                for root, dirs, files in os.walk(package.workdir):
                    for name in files:
                        file = os.path.join(root, name)
                        if pattern.match(file):
                            allFiles.append({"file":file, "status": False})
            else:
                allFiles = process.allFiles
            # save file list? if fail, continue in the list.


            # execute task on files
            numberOfFiles = len(allFiles)
            i = 0
            for i in range(numberOfFiles):
                f = allFiles[i]
                if not f['status']:
                    fileName = f['file']
                    values['file'] = fileName
                    res, errorText = self.run(values, process)
                    if res == -1:
                        allFiles[i]['status'] = False
                        errorDict = {}
                        errorDict['file'] = fileName
                        errorDict['Error'] = errorText
                        errorFiles.append(errorDict)
                        errorHappend(fileName)
                        retval = -1
                    else:
                        allFiles[i]['status'] = True
                    process.progress = (i+1)/numberOfFiles * 100
                    process.allFiles = allFiles
                    process.save()
        process.errors = errorFiles
        process.save()
        # logger.info(errorDict)
        return retval

# @background(schedule=1)
@task(name="executeProcessFlow")
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

            obj = None
            res = -1
            if process.module.type == Module.MODULE_TYPE_PYTHON:
                # time.sleep(10)
                # logger.debug('importing module')
                module = importlib.import_module(process.module.python_module)
                try:
                    obj = module.task()
                except Exception as e:
                    moduleFailed(process.module.name, process, package)
                    break
            elif process.module.type == Module.MODULE_TYPE_COMMAND:
                try:
                    obj = bashModule()
                except Exception as e:
                    moduleFailed(process.module.name, process, package)
                    break
            elif process.module.type == Module.MODULE_TYPE_DOCKER:
                # run the specified image.
                client = docker.from_env()
                client.containers.run(process.module.dockerImage.name, 'echo hello world')

                # create a docker Module
                # 1. check if Dockerfile is present
                # dockerFilePath = os.path.join(process.module.tool_folder_name, 'Dockerfile')
                # if os.path.exists(dockerFilePath) and os.path.isfile(dockerFilePath):
                #     client = docker.from_env()
                #     (image, buildLogs) = client.images.build(dockerFilePath)
                #
                # pass

            # execute the module
            try:
                obj.setupLogging(process, package)
                res = obj.execute(process, package)
                obj.teardownLogging()
            except Exception as e:
                moduleFailed(process.module.name, process, package)
                break
            if res == 1:
                process.status=Process.PROCESS_STATUS_DONE
                process.progress=100
                process.save()
            else:
                process.status = Process.PROCESS_STATUS_ERROR
                package.status = Package.PACKAGE_STATUS_ERROR
                process.save()
                break


    if package.status != Package.PACKAGE_STATUS_ERROR:
        package.status = Package.PACKAGE_STATUS_DONE

    package.save()

def moduleFailed(name, process, package):
    logger.error('Running module: %s failed' % name)
    logger.error(traceback.format_exc())
    process.status = Process.PROCESS_STATUS_ERROR
    package.status = Package.PACKAGE_STATUS_ERROR
    process.save()

# @app.on_after_configure.connect
@periodic_task(run_every=timedelta(seconds=20))
def periodic_scan_for_new_packages(**kwargs):
    # logger.info('my_periodic_task running')
    # path = settings.PAKAGE_SEARCH_PATH
    path = Variable.objects.get(name="packages_path").data
    packages = []
    for file_name in os.listdir(path):
        file_path = os.path.join(path, file_name)
        if os.path.isfile(file_path):
            pass
            #check if .tar
            if file_name.split('.')[-1] == 'tar':
                if Package.objects.filter(path=file_path).exists():
                    # logger.info('package: ' + file_path + ' exists!')
                    pass
                else:

                    package = Package(path=file_path, file_name=file_name)
                    package.save()
                    # logger.info('found new package: ' + file_path + '!')
                    # create database entry, queue jobs to create workdir and untar files.
                    archive_name = file_name.split('.')[-2]
                    output = subprocess.check_output(['/code/tools/a.out', file_path, archive_name + '/mets.xml'])
                    start_index = output.find(b'LABEL="')
                    label = output[start_index+7:start_index+200].decode('utf-8')
                    end_index = label.find('" ')
                    label = label[0:end_index]
                    package.name=label
                    package.save()
                    template = Template.objects.get(pk=0)
                    if template:
                        for process in template.processes.all():
                            process.pk = None
                            process.template = None
                            process.package = package
                            process.save()
                    # module = Module.objects.get(name="Setup workdir")
                    # if module:
                    #     process1 = Process(order=0, package=package, module=module, value={})
                    #     process1.save()
                    # module2 = Module.objects.get(name="Untar archive")
                    # if module2:
                    #     process1 = Process(order=1, package=package, module=module2, value={})
                    #     process1.save()
                    executeProcessFlow(package.package_id)

                    # calculate
                    calculateMetricsForNewPackage(package)


def calculateMetricsForNewPackage(package):

    package = Package.objects.get(pk=package.package_id)

    stats = {}
    filetypes = {}

    # for file_name in os.listdir(package.path):
    # logger.info(os.path.join(package.workdir, package.file_name.split('.')[0]))
    total_number_of_files = 0
    total_size = 0
    for dirpath, dirs, files in os.walk(os.path.join(package.workdir, package.file_name.split('.')[0])):
        for file in files:
            type = file.split('.')[-1].upper()
            # logger.info(file)
            total_size += os.path.getsize(os.path.join(dirpath, file))
            total_number_of_files += 1
            if type in filetypes:
                filetypes[type] += 1
            else:
                filetypes[type] = 1

    	# print files
    # logger.info(filetypes)
    stats['fileTypes'] = filetypes
    stats['total_number_of_files'] = total_number_of_files
    stats['total_size'] = total_size

    package.statistics = stats
    package.save()


@task(name="finished package")
def finishPackage(package_id):
    try:
        package = Package.objects.get(pk=package_id)
    except ObjectDoesNotExist:
        logger.error("The selected package does not exist")
        return

    # add template tasks
    template = Template.objects.get(pk=1)
    if template:
        for process in template.processes.all():
            process.pk = None
            process.template = None
            process.package = package
            process.save()

    executeProcessFlow(package_id)

    # save the data to done.
    try:
        package = Package.objects.get(pk=package_id)
    except ObjectDoesNotExist:
        logger.error("The selected package does not exist")
        return

    stats = package.statistics
    # for every filetype, add to processed files.
    fileTypes = stats['fileTypes']
    for ft in fileTypes:
        logger.info(ft)
        try:
            fileType = FileType.objects.get(name=ft)
            fileType.total += fileTypes[ft]
            fileType.save()
        except FileType.DoesNotExist:
            fileType = FileType(name=ft, total=fileTypes[ft])
            fileType.save()
    var = Variable.objects.get(name="total_number_of_files")
    value = int(var.data)
    var.data = value + stats['total_number_of_files']
    var.save()
    var = Variable.objects.get(name="total_size")
    value = int(var.data)
    var.data = value + stats['total_size']
    var.save()
    var = Variable.objects.get(name="total_number_of_packages")
    value = int(var.data)
    var.data = value + 1
    var.save()
    package.status = Package.PACKAGE_STATUS_FINISHED
    package.save()
