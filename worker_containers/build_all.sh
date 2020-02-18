#!/bin/sh

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

cd $parent_path
docker build -t worker_base -t axenu/app-worker-base -f ./app-worker-base/Alpine/Dockerfile ./app-worker-base/
docker build -t worker_base:debian -t axenu/app-worker-base:debian -f ./app-worker-base/Debian/Dockerfile ./app-worker-base/

docker build -t unoconv_worker -t axenu/app-unoconv-worker ./app-unoconv-worker
docker build -t verapdf_worker -t axenu/app-verapdf-worker ./app-verapdf-worker
# cd $parent_path/images
# ./build_containers.sh

