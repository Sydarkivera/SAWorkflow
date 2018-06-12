__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from api.models import Module, Package, Process
from api.serializers import ModuleSerializer, PackageSerializer, PackageDetailSerializer, ProcessSerializer
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404

import os, pwd
from os import listdir
from os.path import isfile, join
from django.conf import settings
import subprocess
import shutil

from logging import getLogger
logger = getLogger('django')

@api_view(['GET', 'PUT'])
def module_list(request):
    """
    List all modules, or create a new module.
    """
    if request.method == 'GET':
        modules = Module.objects.all()
        serializer = ModuleSerializer(modules, many=True)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ModuleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def package_list(request):
    """
    List all packages.
    """
    if request.method == 'GET':
        # Find packages in folder.
        # create database entries for them.
        # find names of the packages.
        # list pacakges from database corresponding to files in folder.
        path = settings.PAKAGE_SEARCH_PATH
        packages = []
        for file_name in listdir(path):
            file_path = join(path, file_name)
            if isfile(file_path):
                #check if .tar
                if file_name.split('.')[-1] == 'tar':
                    try:
                        package = Package.objects.get(path=file_path)
                        packages.append(package)
                    except ObjectDoesNotExist:
                        archive_name = file_name.split('.')[-2]
                        output = subprocess.check_output(['/code/tools/a.out', file_path,archive_name + '/mets.xml'])
                        start_index = output.find(b'LABEL="')
                        label = output[start_index+7:start_index+200].decode('utf-8')
                        end_index = label.find('" ')
                        label = label[0:end_index]
                        package = Package(path=file_path, file_name=file_name, name=label)
                        package.save()

                        #set default module
                        module = Module.objects.get(pk=1)
                        if module:
                            process1 = Process(order=0, package=package, module=module, value={})
                            process1.save()

                        packages.append(package)
                        # print("package does not exist")
                # files.append({'name':file})
        # [f for f in listdir(path) if isfile(join(path, f))]
        serializer = PackageSerializer(packages, many=True)
        # print(files)
        return Response(serializer.data)

@api_view(['GET', 'DELETE'])
def package_detail(request, id):
    """
    Get one package or delete it.
    """
    package = get_object_or_404(Package, pk=id)
    if request.method == 'GET':
        logger.error(pwd.getpwuid(os.getuid()))
        serializer = PackageDetailSerializer(package)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        if 'removeWorkdir' in request.data:
            if request.data['removeWorkdir']:
                # delete workdir
                if os.path.isdir(package.workdir):
                    shutil.rmtree(package.workdir)
                    logger.info('deleting package workdir: ' + package.workdir)
        package.delete()
        return HttpResponse(status=204)

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

@api_view(['GET', 'PUT', 'DELETE'])
def process_detail(request, process_id):
    """
    Display specific process.
    """
    process = get_object_or_404(Process, pk=process_id)
    if request.method == 'GET':
        serializer = ProcessSerializer(process)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ProcessSerializer(process, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            process.status = Process.PROCESS_STATUS_EDITED
            process.save()
            process.package.status = Package.PACKAGE_STATUS_EDITED
            process.package.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        process.package.status = Package.PACKAGE_STATUS_EDITED
        process.package.save()
        process.delete()
        return HttpResponse(status=204)

@api_view(['GET', 'POST'])
def process_add(request):
    """
    Add new process.
    """
    if request.method == 'POST':
        serializer = ProcessSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            package = get_object_or_404(Package, pk=request.data['package'])
            package.status = Package.PACKAGE_STATUS_EDITED
            package.save()
            serializer = ProcessSerializer(package.processes, many=True)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        processes = Process.objects.all()
        serializer = ProcessSerializer(processes, many=True)
        return Response(serializer.data)
