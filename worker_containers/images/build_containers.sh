#!/bin/sh

docker build -t droid_worker ./droid
docker build -t unoconv_worker ./unoconv
docker build -t vera_pdf ./VeraPDF
