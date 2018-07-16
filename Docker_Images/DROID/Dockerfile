FROM openjdk:8-alpine

RUN apk add curl

RUN curl -o droid.zip http://www.nationalarchives.gov.uk/documents/information-management/droid-binary-6.4-bin.zip &&\
unzip droid.zip &&\
rm -f droid.zip
