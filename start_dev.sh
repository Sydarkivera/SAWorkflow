#!/bin/sh

# build local worker_containers
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

cd $parent_path
docker build -t axenu/app-worker-base:alpine -t axenu/app-worker-base:latest -f ./worker_containers/app-worker-base/Alpine/Dockerfile ./worker_containers/app-worker-base/
docker build -t axenu/app-worker-base:debian -f ./worker_containers/app-worker-base/Debian/Dockerfile ./worker_containers/app-worker-base/

docker build -t axenu/app-worker-droid -f ./worker_containers/app-worker-droid/Dockerfile ./worker_containers/app-worker-droid/
docker build -t axenu/app-worker-verapdf -f ./worker_containers/app-verapdf-worker/Dockerfile ./worker_containers/app-verapdf-worker/
docker build -t axenu/app-worker-unoconv -f ./worker_containers/app-unoconv-worker/Dockerfile ./worker_containers/app-unoconv-worker/


# start docker-compose
docker-compose -f docker-compose.dev.yml build
docker-compose -f docker-compose.dev.yml up -d
 
# reset database?
# sleep 20
docker exec app_django_1 python /code/populate_database.py
# python ./APPBackend/Django/populate_database.py