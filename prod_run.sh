#!/bin/sh

/code/manage.py migrate
uwsgi --ini /uwsgi.ini
