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
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from api.models import Module, Package, Process, Template, Variable, DockerImage
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
import docker


from logging import getLogger
logger = getLogger('django')


@api_view(['GET'])
def image_list(request):
    """
    get list of images
    """
    if request.method == 'GET':
        images = DockerImage.objects.all()
        serializer = DockerImageSerializer(images, many=True)
        # client = docker.from_env()
        # allImages = client.images.list()
        # res = []
        # for image in allImages:
        #     res.append({'tags': image.tags, 'id': image.id, 'labels': image.labels})

    return JsonResponse(serializer.data, safe=False)
    # logger.info(res)
    # return HttpResponse(status=200)
