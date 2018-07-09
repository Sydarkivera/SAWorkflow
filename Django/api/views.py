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
        serializer = ModuleSerializer(data=request.data, partial=True)
        if serializer.is_valid():
            # TODO: Check if the file exists if it is a python module, or validate the command more exactly
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def module_import(request):
    """
    unpack imported module and add it to the system
    """
    file = request.FILES['file']
    fname = 'temp' + str(int(time.time()))

    tar = tarfile.open(fileobj=file)
    tar_list = tar.getnames()
    if 'data.json' in tar_list:
        jsonFO = tar.extractfile('data.json')
        data = jsonFO.read()
        jsonData = json.loads(data.decode("utf-8"))
        serializer = ModuleSerializer(data=jsonData, partial=True)
        if serializer.is_valid():
            serializer.save()
            # logger.info('python_file_path: ', serializer.data['python_module'])
            if 'python_module' in serializer.data and serializer.data['type'] == 'Python module':
                # import python file
                py_file_name = serializer.data['python_module'].split('.')[-1]
                py_file_name += '.py'
                py_path = os.path.join(settings.BASE_DIR, 'tools')
                # verify that the python file exists in the package:
                if py_file_name in tar_list:
                    tar.extract(py_file_name, path=py_path)
        else:
            logger.error('Failed to serialize imported module: ', serializer.errors)
    tar.close()

    #return list of all tools:
    modules = Module.objects.all()
    serializer = ModuleSerializer(modules, many=True)
    return Response(serializer.data)

@api_view(['POST', 'DELETE'])
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
    elif request.method == 'DELETE':
        module.delete()
        return HttpResponse(status=204)

@api_view(['GET'])
def module_export(request, module_id):
    """
    Export all data in the module as a tar file.
    """
    module = get_object_or_404(Module, pk=module_id)
    serializer = ModuleSerializer(module)


    files = []
    files.append(ContentFile(b(json.dumps(serializer.data)), name="data.json"))

    if module.type == 1:
        # export python file
        logger.info(module.python_module.split('.')[-1:])
        files.append(File(open(os.path.join(BASE_DIR, 'tools/') + '.'.join(module.python_module.split('.')[-1:]) + '.py'), name=module.python_module.split('.')[-1] + '.py'))

    temp_file = ContentFile(b(""), name=module.name + '.tar')
    with tarfile.TarFile(fileobj=temp_file, mode='w', debug=3) as tar_file:
        for file_ in files:
            file_name = file_.name
            try:
                data = file_.read()
            except UnicodeDecodeError:
                pass
            file_.seek(0, os.SEEK_SET)
            size = len(data)
            try:
                if isinstance(data, bytes):
                    lol = BytesIO(data)
                else:
                    lol = BytesIO(data.encode())
            except UnicodeDecodeError:
                pass
            try:
                info = tar_file.gettarinfo(fileobj=file_)
            except UnsupportedOperation:
                info = tarfile.TarInfo(name=file_name)
            info.size = size
            tar_file.addfile(tarinfo=info, fileobj=lol)
    file_size = temp_file.tell()
    temp_file.seek(0)

    response = HttpResponse(temp_file, content_type='application/x-tar')
    response['Content-Disposition'] = 'attachment; filename=\"' + module.name + '.tar\"'
    response['Content-Length'] = file_size
    return response
    # def get_files(self):
    #     # for i in range(0,10):
    #     yield ContentFile(b(json.dumps(serializer.data)), name="data.json")
    #         # yield file_like
    #



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
        templates = Template.objects.all().order_by('template_id')
        serializer = TemplateListSerializer(templates, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        # create a new template
        if 'package_id' not in request.data:
            # check if it can be created as a completely new template
            if 'template_id' in request.data:
                # update template_id with the data from package_id.
                template = get_object_or_404(Template, pk=request.data['template_id'])
                template.name = request.data['templateName']
                template.save()
                serializer = TemplateDetailSerializer(template)
                return Response(serializer.data)
            else:
                if 'templateName' in request.data:
                    template = Template(name=request.data['templateName'])
                    template.save()
                    serializer = TemplateDetailSerializer(template)
                    return Response(serializer.data)
                return Response('package_id or templateName is required to save a new template', status=status.HTTP_400_BAD_REQUEST)
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



@api_view(['GET', 'DELETE'])
def template_detail(request, template_id):
    """
    display a single template.
    """
    template = get_object_or_404(Template, pk=template_id)
    if request.method == 'GET':
        serializer = TemplateDetailSerializer(template)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        if not template.packages.all().exists():
            template.delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=409)

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
        fileTypes = FileType.objects.all().order_by('total').reverse()
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


@api_view(['GET', 'POST'])
def variables_global(request):
    """
    Get a list of system variables or (POST) set the variables
    """

    if request.method == 'GET':
        global_variables = ['work_dir_path', 'packages_path', 'premis_file_name']
        res = {}
        for vname in global_variables:
            v = get_object_or_404(Variable, name=vname)
            res[vname] = v.data
        return JsonResponse(res)
    elif request.method == 'POST':
        for key, value in request.data.items():
            v = get_object_or_404(Variable, name=key)
            v.data = value
            v.save()

        # for var in request.data:
        #     v = get_object_or_404(Variable, pk=var.id)
        #     serialzer = VariableSerializer(v, request.data)
        #     if serialzer.is_valid():
        #         serialzer.save()
        #     else:
        #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return HttpResponse(status=200)
