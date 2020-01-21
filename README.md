# A.P.P - Sydarkivera

<p align="center">
    <a href="https://github.com/badges/shields/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/badges/shields" /></a>
    <a href="#backers" alt="Backers on Open Collective">
        <img src="https://img.shields.io/docker/cloud/automated/axenu/app.svg" /></a>
</p>

[![Build Status](https://img.shields.io/docker/cloud/automated/axenu/app.svg)](https://hub.docker.com/repository/docker/axenu/app/general) 

## About

A.P.P is a tool developed by Sydarkivera to create a user friendly and extensible interface for file processing workflows. The tools is developed with focus on handling every possible tool for verifying, validating and converting files in batches. To allow for great flexibility A.P.P has support for user defined tools which can easily be added to the system.

## Running - Production

A.P.P is designed to be run in a docker environment. As such the whole system can be started with:

$ docker-compose -f docker-compose.prod.yml up --build

The folder /worker_container/images contains a set of images that can be run used to process files in the system as examples. Each docker instance should be based on worker_base to allow for per file status with low overhead. More details can be found under "Tool types"

## Running - Development

For development the docker-compose file dev.yml is recommended. It can be started with:

$ docker-compose -f docker-compose.dev.yml up --build

Alternatively to build all containers and the smart docker containers the helper sh file "reset_for_development.sh" van be used. WARNING: This script will terminate and remove all running containers on the system. Don't use in production!!!

## Tool types

### Command
A simple command to be run in the Django docker container. Only suitable for simple commands.

### Python module
The option to run a python script in the Django docker container. Only suitable for simple commands.

### Docker Container
A docker container that will be started with one command and then exits. Useful for operations that can be run on all files in a package at once.

### Smart docker

A docker alternative which must be based on "worker_base". This container will be started once per job and then run it's command per file with minimal overhead. This will likely be the most useful alternative. Examples of Smart docker containers can be found under worker_container/images

## Support

Contact simon@axenu.com or simon.nilsson@sydarkivera.se

## License

This project is licensed under the terms of the GNU (General Public License)
