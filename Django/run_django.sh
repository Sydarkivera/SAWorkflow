#!/bin/sh

# wait for PSQL server to start
sleep 10

# cd myproject
# prepare init migration
python manage.py makemigrations api
# migrate db, so we have the latest db schema
python manage.py migrate

python populate_database.py


gunicorn config.wsgi:application -w 2 -b :80
