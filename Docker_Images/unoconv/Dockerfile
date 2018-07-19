FROM alpine:3.6


ENV UNO_URL https://raw.githubusercontent.com/dagwieers/unoconv/master/unoconv

RUN apk --no-cache add bash mc \
            curl \
            util-linux \
            libreoffice \
            libreoffice-common \
            libreoffice-writer \
            ttf-droid-nonlatin \
            ttf-droid \
            ttf-dejavu \
            ttf-freefont \
            ttf-liberation
RUN curl -Ls $UNO_URL -o /usr/local/bin/unoconv \
        && chmod +x /usr/local/bin/unoconv \
        && ln -s /usr/bin/python3 /usr/bin/python \
        && apk del curl \
        && rm -rf /var/cache/apk/*

# RUN mkdir /workdir
