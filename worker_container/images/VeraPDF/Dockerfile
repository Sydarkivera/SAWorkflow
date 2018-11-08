# always base every smart docker container on worker_base.
#It contains all the logic for communicating the results
FROM worker_base

# install java
RUN apk --update add openjdk8-jre
# install curl
RUN apk add curl



#insatll verapdf
RUN curl -L http://downloads.verapdf.org/rel/verapdf-pdfbox-installer.zip -o /tmp/verapdf-installer.zip
RUN unzip /tmp/verapdf-installer.zip -d /tmp/
ADD ./auto-install-veraPDF.xml /tmp/auto-install-veraPDF.xml
RUN java -jar /tmp/verapdf-pdfbox-1.12.1/verapdf-izpack-pdfbox-installer-1.12.1.jar /tmp/auto-install-veraPDF.xml
ENV PATH="/opt/verapdf:${PATH}"
