__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GPL"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, StreamingHttpResponse, HttpResponseBadRequest
from api.tasks import executeProcessFlow
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from api.models import Process, Package
import os

def index(request):
    # return HttpResponse("Hello, world. You're at the polls index.")
    return render(request, 'core/index.html', {})

def package(request, id):
    return render(request, 'core/package.html', {'package_id': id})

@csrf_exempt
@require_http_methods(["POST"])
def execute(request, id):
    package = get_object_or_404(Package, pk=id)
    if package.status == package.PACKAGE_STATUS_NEW or package.status == package.PACKAGE_STATUS_EDITED:
        for process in package.processes.all():
            if process.status != Process.PROCESS_STATUS_DONE:
                process.status = process.PROCESS_STATUS_WAITING
                process.save()
        package.status = package.PACKAGE_STATUS_WAITING
        package.save()
        executeProcessFlow(id)
        return HttpResponse(status=204)
    return HttpResponseBadRequest("The specified package is not ready to be run.")

def status(request, id):
    return render(request, 'core/status.html', {'package_id': id})

@require_http_methods(["GET"])
def display_info_log(request, process_id):
    process = get_object_or_404(Process, pk=process_id)
    content = 'File does not exist yet.'
    if os.path.isfile(process.log_path):
        content = open(process.log_path, 'r').read()
    if content == '':
        content = 'Log file is empty'
    response = StreamingHttpResponse(content)
    response['Content-Type'] = 'text/plain; charset=utf8'
    return response

@require_http_methods(["GET"])
def display_error_log(request, process_id):
    process = get_object_or_404(Process, pk=process_id)
    content = 'File does not exist yet.'
    if os.path.isfile(process.err_path):
        content = open(process.err_path, 'r').read()
    if content == '':
        content = 'Log file is empty'
    response = StreamingHttpResponse(content)
    response['Content-Type'] = 'text/plain; charset=utf8'
    return response
