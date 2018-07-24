FROM openjdk:8-alpine

RUN apk --no-cache --virtual .build-deps add curl

#insatll verapdf
RUN curl -L http://downloads.verapdf.org/rel/verapdf-pdfbox-installer.zip -o /tmp/verapdf-installer.zip
RUN unzip /tmp/verapdf-installer.zip -d /tmp/
ADD ./auto-install-veraPDF.xml /tmp/auto-install-veraPDF.xml
RUN java -jar /tmp/verapdf-pdfbox-1.12.1/verapdf-izpack-pdfbox-installer-1.12.1.jar /tmp/auto-install-veraPDF.xml
ENV PATH="/opt/verapdf:${PATH}"
