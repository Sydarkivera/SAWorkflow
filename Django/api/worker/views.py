__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2018, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.http import HttpResponse, JsonResponse, StreamingHttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import Permission
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from api.models import Module, Package, Process, Template, Variable, Job
from api.serializers import *
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404
from api.tasks import executeProcessFlow, finishPackage
from django.core.files.base import ContentFile, File
from django.utils.six import b, BytesIO
import json
from config.settings import BASE_DIR

import os
import pwd
from os import listdir
from os.path import isfile, join
from django.conf import settings
import subprocess
import shutil
import tarfile
from io import UnsupportedOperation
import time
import tarfile
from api.worker.helper import send_request
from api.helper import fixCommand, get_values

from logging import getLogger
logger = getLogger('django')


@api_view(['PUT'])
@permission_classes((AllowAny, ))
def result(request):
    if request.method == 'PUT':
        # check and validate result
        if 'job_id' not in request.data:
            logger.info("job_id missing in request.data")
            return HttpResponse("Missing job_id in request body", status=400)

        job = get_object_or_404(Job, pk=request.data['job_id'])
        process = job.process
        allFiles = process.allFiles

        # save the results to the database
        if 'stderr' in request.data and request.data['stderr'] != "":
            allFiles[job.file_index]['status'] = False
            errorDict = {}
            errorDict['file'] = job.file_name
            errorDict['log'] = request.data['stderr']
            process.errors.append(errorDict)
            errorHappend(job.file_name)
        else:
            allFiles[job.file_index]['status'] = True
            process.logs.append({'file': job.file_name, 'log': request.data['stdout']})
        # process.errors = errorFiles
        # process.logs = logs
        process.progress = (job.file_index + 1) / len(allFiles) * 100
        process.allFiles = allFiles
        process.save()

        # prepare next task.
        job.file_index = job.file_index + 1
        if job.file_index >= len(allFiles):
            # the job is done.... TODO: Handle done
            process.status = Process.PROCESS_STATUS_DONE
            process.progress = 100
            process.save()
            # TODO handle done
            # return HttpResponse("Job completed", status=200)
            logger.info("job is done")
            return JsonResponse({"done": True}, status=200)
            pass

        job.file_name = allFiles[job.file_index]['file']
        job.save()

        # reply with next task, if there are any, else end it.
        values = get_values(process, process.package)
        relative = os.path.relpath(job.file_name, process.package.workdir)
        values['file'] = os.path.join(
            process.module.docker_mount_point, relative)

        command = fixCommand(process, values)

        command_string = ' '.join(command)
        data = {}
        data['command'] = command_string
        data['process_id'] = process.process_id
        data['file'] = job.file_name
        data['job_id'] = job.id
        container_name = process.module.dockerImage.name + "-2"
        container_name = container_name.replace('_', '-')
        # figure out name of new container in network
        url = "http://" + container_name + "/start/"
        logger.info(url)
        # send_request(url, data)


        # add.now(3, 7)
        # return HttpResponse("A simple get request. started add task", status=200)
        return JsonResponse(data, status=200)
