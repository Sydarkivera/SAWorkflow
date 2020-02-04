#!/bin/sh

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

cd $parent_path/worker_base
docker build -t worker_base .
docker build -t worker_base:debian -f debian/Dockerfile .
cd $parent_path/images
./build_containers.sh
