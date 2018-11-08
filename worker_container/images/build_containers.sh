#!/bin/sh

docker build -t ls_worker ./ls
docker build -t droid_worker ./droid
docker build -t unoconv_worker ./unoconv
docker build -t vers_pdf ./VeraPDF
