__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.http import HttpResponse, JsonResponse, StreamingHttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from api.models import Module, Package, Process, Template
from api.serializers import *
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404

import os
import pwd
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


@api_view(['POST'])
def module(request, id):
    """
    Handle module edits
    """
    module = get_object_or_404(Module, pk=id)
    if request.method == 'POST':
        serializer = ModuleSerializer(module, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    pass


@api_view(['GET'])
def package_list(request):
    """
    List all packages.
    """
    if request.method == 'GET':
        packages = Package.objects.all()
        serializer = PackageSerializer(packages, many=True)
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

        # convert response to json dicts
        # res = {}
        # rows = output.split('\n')
        # for row in rows:
        #     parts = row.split('/')
        #     temp = res
        #     for part in parts:
        #         if part != '':
        #             if part not in temp:
        #                 temp[part] = {}
        #             temp = temp[part]

        # convert to json arrays
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
        logger.error(pwd.getpwuid(os.getuid()))
        serializer = PackageDetailSerializer(package)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        # if 'removeWorkdir' in request.data:
            # if request.data['removeWorkdir']:
                # delete workdir
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
        serializer = ProcessSerializer(
            process, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            process.status = Process.PROCESS_STATUS_EDITED
            process.save()
            if process.package != None:
                process.package.status = Package.PACKAGE_STATUS_EDITED
                process.package.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        if process.package != None:
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
            if 'package' in request.data:
                package = get_object_or_404(Package, pk=request.data['package'])
                package.status = Package.PACKAGE_STATUS_EDITED
                package.save()
                serializer = ProcessSerializer(package.processes, many=True)
                return Response(serializer.data)
            elif 'template' in request.data:
                template = get_object_or_404(Template, pk=request.data['template'])
                serializer = ProcessSerializer(template.processes, many=True)
                return Response(serializer.data)
            else:
                return Response('A call to add process requires either package or template to be defined', status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        processes = Process.objects.all()
        serializer = ProcessSerializer(processes, many=True)
        return Response(serializer.data)


@api_view(['GET', 'POST'])
def template_list(request):
    """
    list templates.
    """
    if request.method == 'GET':
        templates = Template.objects.all()
        serializer = TemplateListSerializer(templates, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        # create a new template
        if 'package_id' not in request.data:
            return Response('package_id is required to save a new template', status=status.HTTP_400_BAD_REQUEST)
        package = get_object_or_404(Package, pk=request.data['package_id'])
        if 'template_id' in request.data:
            # update template_id with the data from package_id.
            template = get_object_or_404(Template, pk=request.data['template_id'])
            # if templateName exists, update the name of template
            if 'templateName' in request.data:
                template.name = request.data['templateName']
                template.save()
            # delete old processes
            template.processes.all().delete()
            # save the new updated processes
            for process in package.processes.all():
                if not process.module.hidden:
                    process.pk = None
                    process.template = template
                    process.package = None
                    process.save()
            package.active_template = template
            package.save()
            return HttpResponse(status=204)
        elif 'templateName' in request.data:
            # save as a new template.
            logger.info('template from name only')
            logger.info(request.data['templateName'])
            template = Template(name=request.data['templateName'])
            template.save()
            for process in package.processes.all():
                if not process.module.hidden:
                    process.pk = None
                    process.template = template
                    process.package = None
                    process.save()
            package.active_template = template
            package.save()
            return HttpResponse(status=204)
        else:
            return Response('package_id is required to save a new template', status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def template_detail(request, template_id):
    """
    display a single template.
    """
    template = get_object_or_404(Template, pk=template_id)
    if request.method == 'GET':
        serializer = TemplateDetailSerializer(template)
        return Response(serializer.data)

@api_view(['GET', 'PUT'])
def template_process_list(request, template_id):
    """
    List all processes of selected Tempalte.
    """
    template = get_object_or_404(Template, pk=template_id)
    if request.method == 'GET':
        serializer = ProcessSerializer(template.processes, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        logger.info(request.data)
        for process in request.data:
            p = Process.objects.get(pk=process['process_id'])
            p.order = process['order']
            # p.status = Process.PROCESS_STATUS_EDITED
            p.save()
        return HttpResponse(status=204)

@api_view(['PUT'])
def template_package_detail(request, template_id, package_id):
    """
    Set a template to a package
    """
    template = get_object_or_404(Template, pk=template_id)
    package = get_object_or_404(Package, pk=package_id)
    if request.method == 'PUT':
        package.active_template = template
        # delete old processes from package
        for process in package.processes.all():
            if not process.module.hidden:
                process.delete()
        for process in template.processes.all():
            # logger.info(process.name)
            if not process.module.hidden:
                process.pk = None
                process.template = None
                process.package = package
                process.save()
        package.save()
    return HttpResponse(status=204)

@api_view(['GET'])
def dashboardStats(request):
    """
    Get the data required for the global dashboard in one json response
    """
    if request.method == 'GET':
        #filetypes:
        fileTypes = FileType.objects.all()
        data = {}
        data['fileTypes'] = FileTypesSerializer(fileTypes, many=True).data
        # variables
        var = Variable.objects.get(name="total_number_of_files")
        data['total_number_of_files'] = var.data
        var = Variable.objects.get(name="total_size")
        data['total_size'] = var.data
        var = Variable.objects.get(name="total_number_of_packages")
        data['total_number_of_packages'] = var.data
        var = Variable.objects.get(name="total_number_of_errors")
        data['total_number_of_errors'] = var.data

        #graphdata
        graph = GraphData.objects.order_by('date')[:52]
        data['graphData'] = GraphDataSerializer(graph, many=True).data
        # graph = GraphData(date=datetime.date.today(), size=300000000, count=3452)

        return Response(data)
