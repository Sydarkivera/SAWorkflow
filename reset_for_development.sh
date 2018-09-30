#!/bin/sh

docker kill $(docker ps -q)
docker rm droid-worker-2
docker build -t worker_base ./worker_container
docker build -t droid_worker ./worker_container/example
docker-compose -f dev.yml up --build
