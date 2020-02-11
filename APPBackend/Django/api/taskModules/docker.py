__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from background_task import background
from django.core.exceptions import ObjectDoesNotExist
from api.models import Module, Package, Process, Template, Variable, FileType, Job, GraphData, Container, FileModel
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
from api.taskModules.base import BaseModule

# making http request to another server for smart docker module
import requests

logger = getLogger('background_task')

class DockerModule(BaseModule):

    def start_container(self, name, iteration, package, process):
        container_name = name + "-" + str(iteration)

        # fetch paths
        host_work_dir = Variable.objects.get(name="work_dir_path_host").data
        local_work_dir = Variable.objects.get(name="work_dir_path").data
        unique_workdir = os.path.relpath(package.workdir, local_work_dir)
        host_path = os.path.join(host_work_dir, unique_workdir)

        # start docker container and save a WIP object...
        # logger.info('host_path' + host_path)
        # logger.info('mountpoint: ' + process.module.dockerImage.mountpoint)

        volumes = {
            host_path: {
                'bind': process.module.dockerImage.mountpoint, 
                'mode': 'rw'
            }
        }
        # logger.info(container_name)
        # logger.info(volumes)

        # start container
        container_found = False
        client = docker.from_env()
        while not container_found:
            try:
                container = client.containers.get(container_name)
                logger.error("A container already exists")
                # if container.status == "running":
                #     container.kill()
                # container.remove()
                iteration += 1
                container_name = name + "-" + str(iteration)
            except docker.errors.NotFound:
                # container does not exist, run it
                container_found = True
                pass

        container = client.containers.run(
            process.module.dockerImage.name, detach=True, volumes=volumes, hostname=container_name, name=container_name)

        # list docker networks to select the network for app
        # network name: "APP_Default"
        network_list = client.networks.list(names=["APP_Default"])
        if len(network_list) < 1:
            logger.error(
                "docker network_list does not contain any instance of 'APP_Default'.")
            # logger.info(client.networks.list())
            # for network in
        APP_network = network_list[0]
        already_in_network = False
        # logger.info(APP_network)
        # logger.info(APP_network.containers)
        # logger.info("test if container already in network")
        for con in APP_network.containers:
            logger.log(con.name)
            if con.name == container_name:
                already_in_network = True

        if not already_in_network:
            try:
                APP_network.connect(container, aliases=[container_name])
            except docker.errors.APIError as e:
                logger.error("Error adding container to network")

        containerObject = Container(
            name=name,
            iteration=iteration,
            process=process
            )
        containerObject.save()

        return (iteration, containerObject)

    def run(self, process, package):

        # get file list
        files = self.get_all_files(process)

        # get values
        values = get_values(process, package)
        if 'workdir' in values:
            relative = os.path.relpath(values['workdir'], package.workdir)
            values['workdir'] = os.path.join(
                process.module.dockerImage.mountpoint, relative)

        
        # get container name
        container_name = process.module.dockerImage.name
        container_name = container_name.replace('_', '-')

        if ':' in container_name: # remvoe tag from container_name
            container_name = container_name.split(':')[0]

        # find the container with the highest iteration.
        iteration = 0
        if Container.objects.filter(name=container_name).order_by('-iteration').exists():
            (iteration, container) = Container.objects.filter(name=container_name).order_by('-iteration')[0].iteration + 1

        


        # check if there are any containers already open with this name
        # container_iteration = 1
        # jobs_of_this_type = Job.objects.filter(container_name=container_name)
        # logger.info(jobs_of_this_type)
        # if jobs_of_this_type:
        #     for temp_job in jobs_of_this_type:
        #         logger.info("job in list")
        #         logger.info(temp_job)
        #         logger.info(temp_job.container_iteration)
        #         if temp_job.container_iteration >= container_iteration:
        #             container_iteration = temp_job.container_iteration + 1

        # create a job entry
        # job = Job(
        #     process=process, 
        #     file_name=first_file, 
        #     file_index=index,
            # container_name=container_name, 
            # container_iteration=container_iteration + numberOfParallellJobs
        #     )
        # job.save()

        # fetch teh files to use for the initial containers

        # find the file to use.
        # initial_files = []
        # index = 0
        # for file_obj in allFiles:
        #     if not file_obj['status']:
        #         # first_file = file_obj['file']
        #         initial_files.append(file_obj['file'])
        #         file_obj['status'] = True
        #         if len(initial_files) == numberOfParallellJobs:
        #             break
        #     index += 1
        # if len(initial_files) == 0:
        #     logger.error("no files to process, quitting")
        #     return 1


        # create the containers
        for fileModel in files:
            logger.info(fileModel.name)

            fileModel.status = FileModel.FILEMODEL_STATUS_STARTED
            fileModel.save()

            (iteration, container) = self.start_container(container_name, iteration, package, process)
            iteration = iteration + 1

            # get the command fot this file
            relative = os.path.relpath(fileModel.name, package.workdir)
            values['file'] = os.path.join(
                process.module.dockerImage.mountpoint, relative)


            command = fixCommand(process, values)
            command_string = ' '.join(command)

            # start command
            data = {}
            data['command'] = command_string
            # data['file'] = first_file
            data['process_id'] = process.process_id
            data['file_name'] = fileModel.name
            data['file_id'] = fileModel.id
            data['container_id'] = container.id
            # data['job_id'] = job_id#...
            # figure out name of new container in network
            # container_name = name + "-" + str(iteration)
            url = "http://" + container_name + "-" + str(iteration-1) + "/start/"
            # logger.info(data)
            # logger.info(url)
            # logger.info(job)
            send_request(url, data)

            pass

            # create the container and save it to the job

            # generate the command for this container

            # start the job on this container


        ## below this are the old files


        # find the file to use.
        # first_file = ""
        # index = 0
        # for file_obj in allFiles:
        #     if not file_obj['status']:
        #         first_file = file_obj['file']
        #         break
        #     index += 1
        # if first_file == "":
        #     logger.error("no files to process, quitting")
        #     return 1


        # # calculate first command, and save values in database.
        # logger.info("p: " + first_file + " workdir: " + package.workdir)
        # relative = os.path.relpath(first_file, package.workdir)
        # values['file'] = os.path.join(
        #     process.module.dockerImage.mountpoint, relative)


        # command = fixCommand(process, values)
        
        # container_name += "-" + str(container_iteration)

        # # start docker container and save a WIP object...
        # host_work_dir = Variable.objects.get(name="work_dir_path_host").data
        # local_work_dir = Variable.objects.get(name="work_dir_path").data
        # unique_workdir = os.path.relpath(package.workdir, local_work_dir)
        # host_path = os.path.join(host_work_dir, unique_workdir)

        # logger.info('host_path' + host_path)
        # logger.info('mountpoint: ' + process.module.dockerImage.mountpoint)

        # volumes = {host_path: {
        #     'bind': process.module.dockerImage.mountpoint, 'mode': 'rw'}}
        # logger.info(container_name)
        # logger.info(volumes)

        # # start container
        # # TODO change to trying to create a new container and fail if it doesn't work.
        # client = docker.from_env()
        # try:
        #     container = client.containers.get(container_name)
        #     logger.error("A container already exists")
        #     if container.status == "running":
        #         container.kill()
        #     container.remove()
        # except docker.errors.NotFound:
        #     # container does not exist, run it
        #     pass
        # container = client.containers.run(
        #     process.module.dockerImage.name, detach=True, volumes=volumes, hostname=container_name, name=container_name)

        # # list docker networks to select the network for app
        # # network name: "APP_Default"
        # network_list = client.networks.list(names=["APP_Default"])
        # if len(network_list) < 1:
        #     logger.error(
        #         "docker network_list does not contain any instance of 'APP_Default'.")
        #     # logger.info(client.networks.list())
        #     # for network in
        # APP_network = network_list[0]
        # already_in_network = False
        # # logger.info(APP_network)
        # # logger.info(APP_network.containers)
        # # logger.info("test if container already in network")
        # for con in APP_network.containers:
        #     logger.log(con.name)
        #     if con.name == container_name:
        #         already_in_network = True

        # if not already_in_network:
        #     try:
        #         APP_network.connect(container, aliases=[container_name])
        #     except docker.errors.APIError as e:
        #         logger.error("Error adding container to network")


        # job.container_id = container.id
        # job.save()
        # # an object is needed for running "smart docker job". it needs:
        # # Job_id, container_name, container_id, values, pointer to process

        # # when a job is started the object is created and stored and the first command is dispatched.

        # command_string = ' '.join(command)
        # data = {}
        # data['command'] = command_string
        # # data['file'] = first_file
        # data['process_id'] = process.process_id
        # data['file'] = first_file
        # data['job_id'] = job.id
        # # data['job_id'] = job_id#...
        # # figure out name of new container in network
        # url = "http://" + container_name + "/start/"
        # logger.info(data)
        # logger.info(url)
        # logger.info(job)
        # send_request(url, data)
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