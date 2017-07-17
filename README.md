Toolbox

To run application for debugging:

Create a virtual env
Activate virtual env
$ source venv/bin/activate

Run django
$ python manage.py runserver
Run background tasks
$ python manage.py process_tasks

Start aurelia
$ au run --watch


To setup from github, development:

$ virtualenv venv
$ source venv/bin/activate
$ mkdir log
$ pip install django djangorestframework django-background-tasks jsonfield

aurelia fetch client
$ npm install aurelia-fetch-client whatwg-fetch --save
