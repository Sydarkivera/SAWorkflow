#!/bin/sh

cd ./worker_base
docker build -t worker_base .
cd ../images
./build_containers.sh
