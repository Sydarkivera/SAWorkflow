FROM worker_base

RUN cat /etc/alpine-release

ENV UNO_URL https://raw.githubusercontent.com/dagwieers/unoconv/master/unoconv

RUN apk update

RUN apk --no-cache add icu-libs icu-dev bash mc \
            curl \
            util-linux

RUN apk --no-cache add libreoffice
RUN apk --no-cache add libreoffice-common \
            libreoffice-writer

RUN apk --no-chache add ttf-droid-nonlatin \
            ttf-droid \
            ttf-dejavu \
            ttf-freefont \
            ttf-liberation
RUN curl -Ls $UNO_URL -o /usr/local/bin/unoconv \
        && chmod +x /usr/local/bin/unoconv \
        && apk del curl \
        && rm -rf /var/cache/apk/*

# RUN mkdir /workdir

RUN ls /usr/share/fonts

WORKDIR /usr/share/fonts
COPY ./fonts_from_win10_180824.tar .
RUN tar xvf fonts_from_win10_180824.tar
RUN rm fonts_from_win10_180824.tar
RUN ls
RUN fc-cache -f -v
