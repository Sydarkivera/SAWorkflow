# always base every smart docker container on worker_base.
#It contains all the logic for communicating the results
FROM worker_base

WORKDIR /

# install tool for clamav
RUN apk --update add openjdk8-jre
RUN apk add curl
# download droid
RUN curl -L -o droid.zip http://www.nationalarchives.gov.uk/documents/information-management/droid-binary-6.4-bin.zip

# a local version can be used instead of downloading it. (Used mostyl in development)
# COPY droid.zip droid.zip

RUN unzip droid.zip &&\
rm -f droid.zip

RUN chmod 777 droid.sh

COPY run.sh /run.sh
RUN chmod 777 /run.sh
