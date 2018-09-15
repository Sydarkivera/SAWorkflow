__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2018, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.http import HttpResponse, JsonResponse, StreamingHttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from api.models import Module, Package, Process, Template, Variable
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

from logging import getLogger
logger = getLogger('django')


@api_view(['GET'])
def package_list(request):
    """
    List all packages.
    """
    if request.method == 'GET':
        packages = Package.objects.all()
        serializer = PackageDetailSerializer(packages, many=True)
        # print(files)
        return Response(serializer.data)


@api_view(['GET'])
def package_file_list(request, id):
    """
    List file in a package.
    """
    package = get_object_or_404(Package, pk=id)
    if request.method == 'GET':
        output = subprocess.check_output(
            ['/code/tools/a.out', package.path]).decode('utf-8')
        rows = output.split('\n')
        res = []
        lastPath = ''
        temp = res
        for row in rows:
            if row != '':
                parts = row.split('/')
                if parts[-1] == '':
                    parts = parts[:-1]
                if '/'.join(parts[:-1]) != lastPath:
                    # calculate path...
                    temp = res
                    for part in parts[:-1]:
                        for child in temp:
                            if child['name'] == part:
                                temp = child['children']
                                break
                    lastPath = '/'.join(parts[:-1])

                # logger.info(row)
                # logger.info(parts)
                d = {}
                d['name'] = parts[-1]
                d['children'] = []
                d['path'] = '/'.join(parts)
                d['type'] = 'folder'
                if parts[-1].find('.') != -1:
                    d['format'] = parts[-1][parts[-1].find('.') + 1:]
                    d['type'] = 'file'
                temp.append(d)
                temp = temp[-1]['children']
                lastPath = '/'.join(parts)

        return JsonResponse(res, safe=False)

        response = StreamingHttpResponse(output)
        response['Content-Type'] = 'text/plain; charset=utf8'
        return response


@api_view(['GET', 'DELETE', 'PUT'])
def package_detail(request, id):
    """
    Get one package or delete it.
    """
    package = get_object_or_404(Package, pk=id)
    if request.method == 'GET':
        serializer = PackageDetailSerializer(package)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        if os.path.isdir(package.workdir):
            shutil.rmtree(package.workdir)
            logger.info('deleting package workdir: ' + package.workdir)
        package.delete()
        return HttpResponse(status=204)
    elif request.method == 'PUT':
        serializer = PackageSerializer(package, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return HttpResponse(status=204)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def process_list(request, id):
    """
    List all processes of selected package.
    """
    package = get_object_or_404(Package, pk=id)
    if request.method == 'GET':
        serializer = ProcessSerializer(package.processes, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        logger.info(request.data)
        for process in request.data:
            p = Process.objects.get(pk=process['process_id'])
            p.order = process['order']
            p.status = Process.PROCESS_STATUS_EDITED
            p.save()
            package.status = package.PACKAGE_STATUS_EDITED
            package.save()
        return HttpResponse(status=204)



@api_view(['POST'])
def package_execute(request, package_id):
    package = get_object_or_404(Package, pk=package_id)
    if package.status != package.PACKAGE_STATUS_DONE:
        for process in package.processes.all():
            if process.status != Process.PROCESS_STATUS_DONE:
                process.status = process.PROCESS_STATUS_WAITING
                process.save()
        package.status = package.PACKAGE_STATUS_WAITING
        package.save()
        executeProcessFlow.delay(package_id)
        return HttpResponse(status=204)
    return HttpResponseBadRequest("The specified package is not ready to be run.")


@api_view(['POST'])
def package_finish(request, package_id):
    if request.method == 'POST':
        #done buton pressed in ui.
        finishPackage.delay(package_id)
        return HttpResponse(status=204)


@api_view(['GET', 'DELETE', 'PUT', 'POST'])
@permission_classes((AllowAny, ))
def package_files(request, package_id):
    """
    All functions for handling the filebrowser in ui for package
    """
    package = get_object_or_404(Package, pk=package_id)
    specific_path = request.GET.get('path', '')
    logger.info(specific_path)
    if request.method == 'GET':
        folderName = os.path.join(package.workdir, specific_path)
        logger.info(folderName)
        if 'download' in request.GET:
            if os.path.exists(folderName):
                if os.path.isfile(folderName):
                    with open(folderName, 'rb') as fh:
                        response = HttpResponse(fh.read(), content_type='application/force-download')
                        response['Content-Disposition'] = 'inline; filename=' + os.path.basename(folderName).replace(' ', '_')
                        return response
                else:
                    return downloadFolderAsTar(folderName)
        else:
            return JsonResponse(getFilesAtPath(folderName), safe=False)
    elif request.method == 'DELETE':
        # delete either the file of folder at GET['path']
        folderName = os.path.join(package.workdir, specific_path)
        if os.path.exists(folderName):
            if os.path.isdir(folderName):
                shutil.rmtree(folderName)
            else:
                os.remove(folderName)

            # return updated folder:
            newPath, _  = os.path.split(folderName)
            return JsonResponse(getFilesAtPath(newPath), safe=False)
        else:
            return Response("the file does not exist", status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'POST':
        # file upload. save the file/files at POST['path']
        file = request.FILES['file']
        folderName = os.path.join(package.workdir, request.data['path'])
        # newPath = os.path.join(tools_path, module.tool_folder_name, request.data['path'])
        logger.info(request.data['path'])
        logger.info(newPath)
        #verify that newPath doesn't exist
        if not os.path.exists(newPath):
            with open(newPath, 'wb+') as destination:
                for chunk in file.chunks():
                    destination.write(chunk)

        else:
            return Response("The path does already exist: " + newPath, status=status.HTTP_400_BAD_REQUEST)
        logger.info(newPath)
        p, _ = os.path.split(newPath)
        logger.info(p)
        return JsonResponse(getFilesAtPath(p), safe=False)

    elif request.method == 'PUT':
        # folderName = os.path.join(package.workdir, request.data['path'])
        path = os.path.join(package.workdir, request.data['path'])

        if os.path.exists(path):
            newName = request.data['name']
            head, tail = os.path.split(request.data['path'])
            newName = os.path.join(head, newName)
            newPath = os.path.join(package.workdir, newName)
            shutil.move(path, newPath)
            return JsonResponse(getFilesAtPath(os.path.join(package.workdir, head)), safe=False)
        else:
            #create folder if the file did not exist.
            os.mkdir(path)
            p, _ = os.path.split(path)
            return JsonResponse(getFilesAtPath(p), safe=False)

    return HttpResponse(status=200)




# ------------- (( Helper functions )) ------------- #

def getFilesAtPath(path):
    res = []
    for f in os.listdir(path):
        ff = os.path.join(path, f)
        if os.path.isdir(ff):
            res.append({"type": "folder", "name": f})
            # logger.info("folder: " + f)
        else:
            res.append({"type": "file", "name": f})
            # logger.info("file: " + f)
    return res

def downloadFolderAsTar(path):
    temp_file = ContentFile(b(""), name=os.path.basename(path) + '.tar')
    with tarfile.TarFile(fileobj=temp_file, mode='w', debug=3) as tar_file:
        tar_file.add(path, arcname=os.path.basename(path))
    file_size = temp_file.tell()
    temp_file.seek(0)

    response = HttpResponse(temp_file, content_type='application/x-tar')
    response['Content-Disposition'] = 'attachment; filename=\"' + os.path.basename(path) + '.tar\"'
    response['Content-Length'] = file_size
    return response
