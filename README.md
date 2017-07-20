Toolbox

To run application for debugging:

Create a virtual env
virtualenv venv
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

Package for production:

$ pip freeze > requirements.txt

a.out
api
config
core
manage.py
populate_database.py
static/aurelia/static
statir/css
static/fonts
static/img
tools
venv

mkdir log
mkdir paket
mkdir workdir

setup sql connection
$ python manage.py migrate
setup http with django
run python manage.py process_tasks in background

$ yum install --downloadonly --downloaddir=requirements/ python-pip python-devel
$ yum groupinstall --downloadonly --downloaddir=requirements/ 'Development Tools'
$ yum install --downloadonly --downloaddir=requirements/ httpd mod_wsgi

$ pip download -d python_req -r requirements.txt


mkdir

Install:
With internet
    Enable EPEL:
        $ yum install epel-release
    $ yum update
    $ yum install python-pip python-devel
    $ yum groupinstall 'Development Tools'
    $ yum install httpd mod_wsgi

Without internet:
    tar -xf toolbox-0.2.tar
    cd toolbox
    tar -xf req.tar
    rpm -ivh requirements/*
    mkdir /var/www/html/SAW
