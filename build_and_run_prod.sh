#!/bin/sh

docker-compose -f docker-compose.prod.yml stop

./worker_containers/build_all.sh

docker-compose -f docker-compose.prod.yml build

docker-compose -f docker-compose.prod.yml up -d


sleep 10

# make all migrations
docker exec -it app_django_1 python /code/manage.py migrate


# collect static files
docker exec -it app_django_1 python /code/manage.py collectstatic --noinput



# things to run the first time:

#docker exec -it app_django_1 python /code/populate_database.py
#docker exec -it app_django_1 python /code/manage.py createsuperuser


#### REMBEMBER to change "The absolute path of the workdir on docker host" in global settings to the hosts path
