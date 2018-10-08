#!/bin/sh

docker kill $(docker ps -q)
docker rm droid-worker-2
docker rm unoconv-worker-2
docker build -t worker_base ./worker_container
cd ./worker_container/images
./build_containers.sh
cd ../..
# docker build -t droid_worker ./worker_container/example
docker-compose -f dev.yml up --build
