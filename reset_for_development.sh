#!/bin/sh

docker kill $(docker ps -q)
docker rm $(docker ps -aq)
docker build -t worker_base ./worker_container
cd ./worker_container/images
./build_containers.sh
cd ../..
# docker build -t droid_worker ./worker_container/example
docker-compose -f dev.yml up --build
