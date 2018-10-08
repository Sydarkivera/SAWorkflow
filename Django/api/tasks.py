__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from background_task import background
from django.core.exceptions import ObjectDoesNotExist
from api.models import Module, Package, Process, Template, Variable, FileType, Job
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
from docker.types import Mount
import uuid
import shutil
from xmlGenerator.xmlGenerator import *
from xmlGenerator.xmlExtensions import inlineUUIDModule, inlineDatetimeModule

from celery import Celery
from celery.schedules import crontab
from config.celeryconf import app
from celery.decorators import task
from datetime import timedelta
from celery.task import periodic_task
from time import sleep
# include helper functions for building a command
from api.helper import fixCommand, get_values, errorHappend
from api.worker.helper import send_request

# making http request to another server for smart docker module
import requests

logger = getLogger('background_task')


class pythonModuleBase:

    def __init__(self):
        pass

    def setupLogging(self, process, package):

        # sanitiza log filename
        logName = "".join(x for x in process.module.name if x.isalnum())

        self.logger = logging.getLogger(
            process.module.name + str(package.package_id))
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

    def execute(self, process, package, values):
        # execute writes to log continiously and returns error if there are any.
        pass

    def setup(self, process, package, values):
        pass

    def run(self, process, package):
        # do all preparations that is the same for all modules:

        # set default values
        values = get_values(process, package)

        retval = 1

        logger.info('run values updated')

        # setup extra
        self.setup(process, package, values)

        errorFiles = []
        logs = []

        # check filter.
        filter = process.module.filter
        if filter == '':
            # run once.
            logger.info('run no filter start')
            res, logText = self.execute(process, package, values)
            # if there is an error, store it and return -1
            if res == -1:
                logger.error(logText)
                process.errors = [{'file': 'All files', 'log': logText}]
                process.save()
                return -1
            else:
                process.logs = [{'file': 'All files', 'log': logText}]
                process.save()

            logger.info('run no filter done')
        else:
            logger.info('run filter start')
            # setup regex
            allFiles = self.get_all_files(package, process)

            logger.info('run filter file list generated')
            numberOfFiles = len(allFiles)
            i = 0
            retval = 1
            for i in range(numberOfFiles):
                f = allFiles[i]
                if not f['status']:
                    fileName = f['file']
                    values['file'] = fileName
                    logger.info('run filter before execute')
                    res, logText = self.execute(process, package, values)
                    logger.info('run filter after execute')
                    if res == -1:
                        allFiles[i]['status'] = False
                        errorDict = {}
                        errorDict['file'] = fileName
                        errorDict['log'] = logText
                        errorFiles.append(errorDict)
                        errorHappend(fileName)
                        retval = -1
                    else:
                        allFiles[i]['status'] = True
                        logs.append({'file': fileName, 'log': logText})
                    process.errors = errorFiles
                    process.logs = logs
                    process.progress = (i + 1) / numberOfFiles * 100
                    process.allFiles = allFiles
                    process.save()
        self.teardown(process, package, values)
        # calculate the new filetype split
        package.statistics['fileTypes'], package.statistics['total_number_of_files'], package.statistics['total_size'] = calculateFileType(
            package.workdir)

        package.save()
        return retval
        pass

    def teardown(self, process, package, values):
        pass

    def AnalyseLog(self, process, log):
        for resFilter in process.module.resultFilter:
            pattern = resFilter['value']
            match = re.match(pattern, log)

            if match and resFilter['type'] != "Containing":
                # logger.info(match)
                # logger.info()
                self.logger.error(log)
                return (-1, log)
            elif not match and resFilter['type'] == "Containing":
                self.logger.error(log)
                return (-1, log)
        return (1, "")

    def teardownLogging(self):
        self.logger.removeHandler(self.log_hdlr)
        self.logger.removeHandler(self.err_hdlr)
        del self.logger, self.log_hdlr, self.err_hdlr

    def get_all_files(self, package, process):
        filter = process.module.filter
        try:
            pattern = re.compile(filter)
        except:
            # self.logger.error('Regex is invalid: ' + filter)
            logger.error('Regex is invalid: ' + filter)
            return -1

        # logger.info('run filter regex generated')
        # calculate which files that should be run:
        allFiles = []
        errorFiles = []
        logs = []
        if process.allFiles == []:
            for root, dirs, files in os.walk(package.workdir):
                for name in files:
                    file = os.path.join(root, name)
                    if pattern.match(file):
                        allFiles.append({"file": file, "status": False})
            process.allFiles = allFiles
            process.save()
        else:
            allFiles = process.allFiles
        return allFiles

class bashModule(pythonModuleBase):

    def execute(self, process, package, values):
        args = fixCommand(process, values)
        logger.info(args)

        p = subprocess.Popen(args, stdout=subprocess.PIPE,
                             stderr=subprocess.STDOUT)

        stdout, stderr = p.communicate()

        # validate output, check if there are any error, or if there are errors in the info file.
        if stderr:
            error = stderr.decode('utf-8')
            self.logger.error(error)
            return (-1, error)

        if stdout:
            # self.logger.info('File: ' + )
            log = stdout.decode('utf-8')
            self.logger.info(log)
            res, t = self.AnalyseLog(process, log)
            # if (res == -1):
            # return (res, t)
        return (1, log)


class dockerModule(pythonModuleBase):

    def setup(self, process, package, values):
        pass

    def execute(self, process, package, values):

        # edit path to be relative in the container
        if 'file' in values:
            p = values['file']
            relative = os.path.relpath(p, package.workdir)
            values['file'] = os.path.join(
                process.module.docker_mount_point, relative)

        if 'workdir' in values:
            p = values['workdir']
            relative = os.path.relpath(p, package.workdir)
            values['workdir'] = os.path.join(
                process.module.docker_mount_point, relative)

        client = docker.from_env()

        host_work_dir = Variable.objects.get(name="work_dir_path_host").data
        local_work_dir = Variable.objects.get(name="work_dir_path").data
        unique_workdir = os.path.relpath(package.workdir, local_work_dir)
        host_path = os.path.join(host_work_dir, unique_workdir)

        volumes = {host_path: {
            'bind': process.module.docker_mount_point, 'mode': 'rw'}}
        command = fixCommand(process, values)

        logger.info(host_path)
        logger.info(volumes)
        logger.info(command)

        container = client.containers.run(
            process.module.dockerImage.name, command, detach=True, volumes=volumes)
        retval = 1
        logger.info('docker execute')
        container.wait()
        retText = container.logs().decode('utf-8')
        # for log in container.logs(stream=True):
        res, t = self.AnalyseLog(process, retText)
        if res == -1:
            retval = -1
        else:
            self.logger.info(retText)

        logger.info('docker done')

        logger.info('docker remove')
        container.remove()
        return (retval, retText)


class dockerSmartModue(pythonModuleBase):
    def run(self, process, package):

        # get file list
        allFiles = self.get_all_files(package, process)
        first_file = ""
        index = 0
        for file_obj in allFiles:
            if not file_obj['status']:
                first_file = file_obj['file']
                break
            index += 1
        if first_file == "":
            logger.error("no files to process, quitting")
            return 1

        logger.info("first file: " + first_file)
        # calculate first command, and save values in database.
        values = get_values(process, package)
        # values['file'] =
        # if 'file' in values:
        p = first_file
        relative = os.path.relpath(p, package.workdir)
        values['file'] = os.path.join(
            process.module.docker_mount_point, relative)

        if 'workdir' in values:
            p = values['workdir']
            relative = os.path.relpath(p, package.workdir)
            values['workdir'] = os.path.join(
                process.module.docker_mount_point, relative)


        command = fixCommand(process, values)

        # create Job object
        container_name = process.module.dockerImage.name
        container_name = container_name.replace('_', '-')


        # check if there are any containers already open with this name
        container_iteration = 2
        jobs_of_this_type = Job.objects.filter(container_name=container_name)
        logger.info(jobs_of_this_type)
        if jobs_of_this_type:
            for temp_job in jobs_of_this_type:
                logger.info("job in list")
                logger.info(temp_job)
                logger.info(temp_job.container_iteration)
                if temp_job.container_iteration >= container_iteration:
                    container_iteration = temp_job.container_iteration + 1
        job = Job(process=process, file_name=first_file, file_index=index, container_name=container_name, container_iteration=container_iteration)
        job.save()
        container_name += "-" + str(container_iteration)

        # start docker container and save a WIP object...
        host_work_dir = Variable.objects.get(name="work_dir_path_host").data
        local_work_dir = Variable.objects.get(name="work_dir_path").data
        unique_workdir = os.path.relpath(package.workdir, local_work_dir)
        host_path = os.path.join(host_work_dir, unique_workdir)

        volumes = {host_path: {
            'bind': process.module.docker_mount_point, 'mode': 'rw'}}
        logger.info(container_name)

        # start container
        # TODO change to trying to create a new container and fail if it doesn't work.
        need_network = False
        client = docker.from_env()
        try:
            container = client.containers.get(container_name)
            if container.status != "running":
                container.start()
                need_network = True
                logger.error("container with this name already exists, causing an error!!!")
        except docker.errors.NotFound:
            # container does not exist, run it
            container = client.containers.run(
                process.module.dockerImage.name, detach=True, volumes=volumes, hostname=container_name, name=container_name)
            need_network = True

        job.container_id = container.id
        job.save()

        # list docker networks to select the network for app
        # network name: "APP_Default"
        if need_network:
            network_list = client.networks.list(names=["APP_Default"])
            if len(network_list) < 1:
                logger.error(
                    "docker network_list does not contain any instance of 'APP_Default'.")
                # logger.info(client.networks.list())
                # for network in
            APP_network = network_list[0]
            already_in_network = False
            logger.info(APP_network)
            logger.info(APP_network.containers)
            logger.info("test if container already in network")
            for con in APP_network.containers:
                logger.log(con.name)
                if con.name == container_name:
                    already_in_network = True

            if not already_in_network:
                try:
                    APP_network.connect(container, aliases=[container_name])
                except docker.errors.APIError as e:
                    logger.error("Error adding container to network")

        # an object is needed for running "smart docker job". it needs:
        # Job_id, container_name, container_id, values, pointer to process

        # when a job is started the object is created and stored and the first command is dispatched.

        command_string = ' '.join(command)
        data = {}
        data['command'] = command_string
        # data['file'] = first_file
        data['process_id'] = process.process_id
        data['file'] = first_file
        data['job_id'] = job.id
        # data['job_id'] = job_id#...
        # figure out name of new container in network
        url = "http://" + container_name + "/start/"
        logger.info(url)
        send_request(url, data)
        # try:
        #     r = requests.put(url, data=data)
        #     logger.info("status code: " + str(r.status_code))
        #     if r.status_code != requests.codes.ok:
        #         r.raise_for_status()
        #         send_request(url, data)
        # except requests.exceptions.RequestException:
        #     send_request(url, data)
        #
        # #     #delay then try again
        # #     logger.info("failed to send start message to server. TODO try again")
        return 2

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
            process.status = Process.PROCESS_STATUS_RUNNING
            process.save()

            obj = None
            res = -1

            try:
                if process.module.type == Module.MODULE_TYPE_PYTHON:
                    module = importlib.import_module(
                        process.module.python_module)
                    obj = module.task()
                elif process.module.type == Module.MODULE_TYPE_COMMAND:
                    obj = bashModule()
                elif process.module.type == Module.MODULE_TYPE_DOCKER:
                    # run the specified image.
                    obj = dockerModule()
                elif process.module.type == Module.MODULE_TYPE_SMART_DOCKER:
                    # run the specified image.
                    obj = dockerSmartModue()
                # execute
                obj.setupLogging(process, package)
                res = obj.run(process, package)
                obj.teardownLogging()
            except Exception as e:
                moduleFailed(process.module.name, process, package)
                break

            if res == 1:
                process.status = Process.PROCESS_STATUS_DONE
                process.progress = 100
                process.save()
                # save to premis log

                data = {
                    "package_uuid": package.file_name.split('.')[0],
                    "package_file": package.file_name,
                    "outcome": "0",
                    "label": process.module.name,
                    "detail": process.module.description,
                    "user": "Admin"
                }

                relLogPath = Variable.objects.get(name="premis_file_name").data
                templatePath = Variable.objects.get(
                    name="premis_event_template_path").data

                files = [
                    {
                        "xmlFileName": os.path.join(package.workdir, relLogPath),
                        "templateFileName": templatePath
                    }
                ]
                c = xmlGenerator(data, files)
                c.addExtension(inlineUUIDModule())
                c.addExtension(inlineDatetimeModule())
                c.appendToXML('/premis:premis/premis:event')
            elif res == 2:
                #status ongoing, used for smart docker container
                pass
            else:
                process.status = Process.PROCESS_STATUS_ERROR
                package.status = Package.PACKAGE_STATUS_ERROR
                process.save()
                break

    if package.status != Package.PACKAGE_STATUS_ERROR:
        package.status = Package.PACKAGE_STATUS_DONE

    package.save()


def moduleFailed(name, process, package):
    log = 'Running module: %s failed. \n %s' % (name, traceback.format_exc())
    logger.error(log)

    # save error to error log
    errorDict = {}
    errorDict['file'] = 'Module error'
    errorDict['log'] = log
    process.errors.append(errorDict)
    process.status = Process.PROCESS_STATUS_ERROR
    package.status = Package.PACKAGE_STATUS_ERROR
    process.save()

# @app.on_after_configure.connect


@periodic_task(run_every=timedelta(seconds=5))
def periodic_scan_for_new_packages(**kwargs):
    # logger.info('my_periodic_task running')
    # path = settings.PAKAGE_SEARCH_PATH
    path = Variable.objects.get(name="packages_path").data
    packages = []
    for file_name in os.listdir(path):
        file_path = os.path.join(path, file_name)
        if os.path.isfile(file_path):
            pass
            # check if .tar
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
                    output = subprocess.check_output(
                        ['/code/tools/a.out', file_path, archive_name + '/mets.xml'])
                    start_index = output.find(b'LABEL="')
                    label = output[start_index +
                                   7:start_index + 200].decode('utf-8')
                    end_index = label.find('" ')
                    label = label[0:end_index]
                    package.name = label
                    package.save()
                    template = Template.objects.get(pk=0)
                    if template:
                        for process in template.processes.all():
                            process.pk = None
                            process.template = None
                            process.package = package
                            process.save()

                    # create a workdir for this package
                    workdir_path = Variable.objects.get(
                        name='work_dir_path').data
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
                        shutil.copy(package.path, package.workdir)
                    except IOError:
                        logger.error(
                            "I/O error({0}): {1}".format(e.errno, e.strerror))
                        return -1

                    # calculate
                    calculateMetricsForNewPackage(package)
                    createLogFile(package)

                    executeProcessFlow.delay(package.package_id)


def calculateMetricsForNewPackage(package):
    """
    Unpack the package to a temporary area to analyse it's content, then remove the copy
    """

    workdir_path = Variable.objects.get(name='work_dir_path').data
    dest = os.path.join(workdir_path, str(uuid.uuid4()))

    # copy package
    if not os.path.exists(dest):
        os.makedirs(dest)
    shutil.copy(package.path, dest)

    # untar package
    args = ['tar', '-x']
    args = args + ['-f', os.path.join(dest, package.file_name)]
    args = args + ['-C', dest]

    p = subprocess.Popen(args, stdout=subprocess.PIPE,
                         stderr=subprocess.STDOUT)

    stdout, stderr = p.communicate()
    if stdout:
        self.logger.info(stdout.decode('utf-8'))
    if stderr:
        self.logger.error(stderr.decode('utf-8'))

    os.remove(os.path.join(dest, package.file_name))
    logger.info('Temporary directory is created: ' + dest)

    stats = {}
    # filetypes = calculateFileType(os.path.join(dest, package.file_name.split('.')[0]))
    filetypes, total_number_of_files, total_size = calculateFileType(dest)

    # total_number_of_files = 0
    # total_size = 0

    stats['fileTypes'] = filetypes
    stats['total_number_of_files'] = total_number_of_files
    stats['total_size'] = total_size

    package.statistics = stats
    package.save()

    # delete temporary directory
    shutil.rmtree(dest)


def createLogFile(package):
    """
    Create an initial premis.xml file with one event only.
    """
    data = {
        "package_uuid": package.file_name.split('.')[0],
        "package_file": package.file_name,
        "events": [{
            "outcome": "0",
            "label": "Start A.P.P processing",
            "detail": "The package has been loaded into A.P.P",
            "user": "Admin"
        }]
    }

    relLogPath = Variable.objects.get(name="premis_file_name").data
    templatePath = Variable.objects.get(name="premis_template_path").data

    files = [
        {
            "xmlFileName": os.path.join(package.workdir, relLogPath),
            "templateFileName": templatePath
        }
    ]
    c = xmlGenerator(data, files)
    # add all extensions so that they are loaded if needed
    # c.addExtension(xmlFilesExtenstionModule())
    c.addExtension(inlineUUIDModule())
    c.addExtension(inlineDatetimeModule())
    c.createXML()


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


def calculateFileType(path):
    filetypes = {}
    total_number_of_files = 0
    total_size = 0
    for dirpath, dirs, files in os.walk(path):
        for fileName in files:
            type = fileName.split('.')[-1].upper()
            # logger.info(fileName)
            total_size += os.path.getsize(os.path.join(dirpath, fileName))
            total_number_of_files += 1
            if type in filetypes:
                filetypes[type] += 1
            else:
                filetypes[type] = 1
    return (filetypes, total_number_of_files, total_size)
