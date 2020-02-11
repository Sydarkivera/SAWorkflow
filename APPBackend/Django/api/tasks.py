__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from background_task import background
from django.core.exceptions import ObjectDoesNotExist
from api.models import Module, Package, Process, Template, Variable, FileType, Job, GraphData
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
import datetime

from celery import Celery
from celery.schedules import crontab
from config.celeryconf import app
from celery.decorators import task
from datetime import timedelta
from celery.task import periodic_task
from time import sleep
# include helper functions for building a command
from api.helper import fixCommand, get_values, errorHappend, calculateFileType
from api.worker.helper import send_request

from api.taskModules.bash import BashModule
from api.taskModules.docker import DockerModule

# making http request to another server for smart docker module
import requests

logger = getLogger('background_task')


@task(name="executeProcessFlow")
def executeProcessFlow(package_id, skip_failed_tasks=False):
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
            if not (process.status == Process.PROCESS_STATUS_ERROR and skip_failed_tasks):
                process.status = Process.PROCESS_STATUS_RUNNING
                process.start_time = datetime.datetime.now()
                process.save()

                obj = None
                res = -1

                try:
                    if process.module.type == Module.MODULE_TYPE_PYTHON:
                        module = importlib.import_module(
                            process.module.python_module)
                        obj = module.task()
                    elif process.module.type == Module.MODULE_TYPE_COMMAND:
                        obj = BashModule()
                    # elif process.module.type == Module.MODULE_TYPE_DOCKER:
                    #     # run the specified image.
                    #     obj = dockerModule()
                    elif process.module.type == Module.MODULE_TYPE_SMART_DOCKER:
                        # run the specified image.
                        obj = DockerModule()
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
                    process.end_time = datetime.datetime.now()
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
                    return
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

def execute_initial_tasks_on_package(package):
    # add the default start template to the package
    template = Template.objects.get(name="Default Start")
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
        # cant start logging before folder is in place.
        package.workdir = dest
        if not package.path.endswith('.tar'):
            shutil.copytree(package.path, package.workdir)
        else:
            if not os.path.exists(dest):
                os.makedirs(dest)
            shutil.copy(package.path, package.workdir)
        if not os.path.exists(package.logdir):
            os.makedirs(package.logdir)
        package.save()
    except IOError as e:
        logger.error(
            "I/O error({0}): {1}".format(e.errno, e.strerror))
        return -1

    # calculate metrics and execute initial tasks
    # calculateMetricsForNewPackage(package)
    package.statistics['fileTypes'], package.statistics['total_number_of_files'], package.statistics['total_size'] = calculateFileType(
        package.workdir)
    package.save()
    
    createLogFile(package)
    executeProcessFlow.delay(package.package_id)

def add_new_tar_package(file_path, file_name):
    package = Package(path=file_path, file_name=file_name, type=Package.PACKAGE_TYPE_TAR)
    package.save()
    # logger.info('found new package: ' + file_path + '!')
    # create database entry, queue jobs to create workdir and untar files.
    archive_name = file_name.split('.')[-2]
    package.name = archive_name

    # fetch mets.xml file inside the tar package.
    try:
        output = subprocess.check_output(
            ['tar', 'xOf', file_path, archive_name + '/mets.xml'])

        # get the package name, either from the mets.xml file or just use the tar file name.
        if (len(output) > 0):
            start_index = output.find(b'LABEL="')
            if start_index > 0:
                label = output[start_index +
                                7:start_index + 200].decode('utf-8')
                end_index = label.find('" ')
                package.name = label[0:end_index]
                package.type = Package.PACKAGE_TYPE_SIP

    except subprocess.CalledProcessError as e:
        logger.info('faild too open mets file in tar archive: ' + file_name + ' : ' + str(e.output))

    
    package.save()

    execute_initial_tasks_on_package(package)

    

def add_new_folder_package(file_path, file_name):
    package = Package(path=file_path, file_name=file_name, name=file_name, type=Package.PACKAGE_TYPE_FOLDER)
    package.save()

    execute_initial_tasks_on_package(package)

@periodic_task(run_every=timedelta(seconds=5))
def periodic_scan_for_new_packages(**kwargs):

    path = Variable.objects.get(name="packages_path").data

    for file_name in os.listdir(path):
        file_path = os.path.join(path, file_name)
        if os.path.isfile(file_path):

            # check if .tar
            if file_name.split('.')[-1] == 'tar':
                if not Package.objects.filter(path=file_path).exists():
                    # new package found, add it
                    add_new_tar_package(file_path, file_name)


        elif os.path.isdir(file_path):
            if not Package.objects.filter(path=file_path).exists():
                add_new_folder_package(file_path, file_name)


def calculateMetricsForNewPackage(package):
    """
    Unpack the package to a temporary area to analyse it's content, then remove the copy
    """

    workdir_path = Variable.objects.get(name='work_dir_path').data
    dest = os.path.join(workdir_path, str(uuid.uuid4()))

    # copy package
    if package.file_name.endswith('.tar'):
        if not os.path.exists(dest):
            os.makedirs(dest)
        shutil.copy(package.path, dest)
    else:
        shutil.copytree(package.path, dest)

    # untar package
    args = ['tar', '-x']
    args = args + ['-f', os.path.join(dest, package.file_name)]
    args = args + ['-C', dest]

    p = subprocess.Popen(args, stdout=subprocess.PIPE,
                         stderr=subprocess.STDOUT)

    stdout, stderr = p.communicate()
    if stdout:
        logger.info(stdout.decode('utf-8'))
    if stderr:
        logger.error(stderr.decode('utf-8'))

    if package.file_name.endswith('.tar'):
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
    template = Template.objects.get(name="Default Done")
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




@periodic_task(run_every=crontab(minute="50", hour="23"))
def update_daily_data():
    logger.info("saveing daily data")
    var = Variable.objects.get(name="total_number_of_files")
    num_files = int(var.data)
    var = Variable.objects.get(name="total_size")
    total_size = int(var.data)

    graph = GraphData(date=datetime.date.today(), size=total_size, count=num_files)
    graph.save()
