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
from docker import APIClient


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

@api_view(['POST', 'DELETE'])
def image_detail(request, image_id):
    """
    save changes to an image
    """
    image = get_object_or_404(DockerImage, pk=image_id)
    if request.method == 'POST':
        serializer = DockerImageSerializer(image, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return HttpResponse(status=204)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        if not image.modules.all().exists():
            image.delete()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=409)

@api_view(['GET'])
def image_export(request, image_id):
    """
    Export an image as a tar with docker save
    """
    image = get_object_or_404(DockerImage, pk=image_id)
    if request.method == 'GET':
        client = docker.from_env()
        logger.info(client)
        cli = APIClient(base_url='unix://var/run/docker.sock')
        d_image = cli.get_image(image.name)

        # response = HttpResponse(d_image.save(), content_type='application/x-tar')

        # # response['Content-Length'] = file_size
        # return response

        response = StreamingHttpResponse(d_image)
        response['Content-Type'] = 'application/x-tar'
        response['Content-Disposition'] = 'attachment; filename=\"' + image.name + '.tar\"'
        return response


        return HttpResponse(status=204)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def image_import(request):
    """
    import a docker image
    """
    if request.method == 'POST':
        docker_file = request.FILES['file']
        client = docker.from_env()
        images = client.images.load(docker_file)

        logger.info(request.data)

        if len(images) > 0:
            logger.info(images[0])
            logger.info(images[0].tags)
            dImage = DockerImage(name=images[0].tags[0], label=request.data['label'])
            dImage.save()

            serializer = DockerImageSerializer(dImage)
            return JsonResponse(serializer.data, safe=False)

    return Response(status=status.HTTP_400_BAD_REQUEST)
