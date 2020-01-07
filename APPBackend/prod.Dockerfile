# Start with a Python image.
FROM python:3.5-alpine

# Some stuff that everyone has been copy-pasting
# since the dawn of time.
ENV PYTHONUNBUFFERED 1

# Install some necessary things.
# RUN apt-get update
# RUN apt-get install -y swig libssl-dev dpkg-dev netcat
RUN apk --no-cache --virtual .build-deps add gcc linux-headers libc-dev clamav postgresql-dev curl openjdk8-jre py3-psycopg2
# RUN apk add --repository http://dl-cdn.alpinelinux.org/alpine/edge/main --no-cache py3-psycopg2
#RUN echo "http://dl-cdn.alpinelinux.org/alpine/latest-stable/community" >> /etc/apk/repositories
RUN apk update
RUN apk add docker

ADD ./Django/requirements.txt /requirements.txt
# ADD ./Django/viewtar.c /viewtar.c

# RUN gcc /viewtar.c
# Install our requirements.
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy all our files into the image.
RUN mkdir /code
WORKDIR /code
COPY ./Django /code/
# VOLUME [ "/code/static" ]
COPY ./static /code/static
RUN mkdir /code/log && mkdir /code/internal && mv /a.out /code/internal/

# Collect our static media.
RUN python /code/manage.py collectstatic --noinput

# ADD ./prod_run.sh /prod_run.sh
# RUN chmod 770 /prod_run.sh
# ADD ./uwsgi.ini /uwsgi.ini

EXPOSE 80
# Specify the command to run when the image is run.
CMD ["/usr/bin/gunicorn", "config.wsgi:application", "-w", "2", "-b", ":80"]
