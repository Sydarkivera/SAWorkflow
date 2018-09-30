FROM worker_base

WORKDIR /
# install tool for clamav
RUN apk --update add openjdk8-jre
RUN apk add curl

# RUN curl -o droid.zip http://www.nationalarchives.gov.uk/documents/information-management/droid-binary-6.4-bin.zip

COPY droid.zip droid.zip

RUN unzip droid.zip &&\
rm -f droid.zip

RUN chmod 777 droid.sh

COPY run.sh /run.sh
RUN chmod 777 /run.sh
