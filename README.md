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


Install:

echo "installing yum dependicies"
yum install wget zlib-devel bzip2-devel sqlite sqlite-devel openssl-devel httpd httpd-devel yum-utils
yum groupinstall development
echo "installing python 3.5.2"
wget -q 'https://www.python.org/ftp/python/3.5.2/Python-3.5.2.tgz'
tar -xzf 'Python-3.5.2.tgz'
cd ./Python-3.5.2
CXX=g++ ./configure --enable-shared
make
make altinstall
cd ..
rm -f Python-3.5.2.tgz
rm -rf ./Python-3.5.2
ln -fs /usr/local/bin/python3.5 /usr/bin/python3.5
echo "/usr/local/lib/python3.5" > /etc/ld.so.conf.d/python35.conf
echo "/usr/local/lib" >> /etc/ld.so.conf.d/python35.conf
ldconfig
echo "installing mod_wsgi 4.4.21"
wget -q "https://github.com/GrahamDumpleton/mod_wsgi/archive/4.4.21.tar.gz"
tar -xzf '4.4.21.tar.gz'
cd mod_wsgi-4.4.21/
./configure --with-python=/usr/local/bin/python3.5
make
make install
cd ..
rm -f 4.4.21.tar.gz
rm -rf ./mod_wsgi-4.4.21
echo "opening port 80"
firewall-cmd --add-port=80/tcp --permanent
firewall-cmd --reload
echo "installing SAWorkflow"
mkdir /toolbox
tar -C / -xf toolbox-0.3.tar
rm -rf toolbox-0.3.tar
cd /toolbox/
chown -R apache:apache /toolbox/
nano /etc/httpd/conf.d/toolbox.conf
nano /etc/httpd/conf/httpd.conf
    add LoadModule wsgi_module modules/mod_wsgi.so
    DocumentRoot "/toolbox"
    <Directory "/toolbox">
echo "disable selinux"
/etc/selinux/config
systemctl enable httpd
echo "setting up venv"
pip3.5 install virtualenv
virtualenv -p python3.5 venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py collectstatic
echo "compile tar program"
gcc -std=c99 viewtar.c
reboot now
echo "Add process_tasks to boot"

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

$ yum install --downloadonly --downloaddir=requirements/ python34 python34-setuptools python-pip  python-devel
$ yum groupinstall --downloadonly --downloaddir=requirements/ 'Development Tools'
$ yum install --downloadonly --downloaddir=requirements/ httpd mod_wsgi w

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



    echo 'Python 3.5.2 is not installed, installing Python 3 pre-requisites...'
    yum -y groupinstall development

    echo 'Installing extra packages for Python...'
    yum -y install zlib-devel openssl-devel sqlite-devel bzip2-devel python-devel openssl-devel libffi-devel openssl-perl libjpeg-turbo-devel zlib-devel giflib ncurses-devel gdbm-devel xz-devel tkinter readline-devel tk tk-devel

    echo 'Installing Python 3.5.2...'
    wget -q 'https://www.python.org/ftp/python/3.5.2/Python-3.5.2.tgz'
    tar -xzf 'Python-3.5.2.tgz'
    cd ./Python-3.5.2
    CXX=g++ ./configure --enable-shared
    make

    echo 'Moving to alternate location to keep system Python version intact...'
    make altinstall
    cd ..
    rm Python-3.5.2.tgz
    rm -rf ./Python-3.5.2
    ln -fs /usr/local/bin/python3.5 /usr/bin/python3.5
    echo "/usr/local/lib/python3.5" > /etc/ld.so.conf.d/python35.conf
    echo "/usr/local/lib" >> /etc/ld.so.conf.d/python35.conf
    ldconfig

    echo 'Now, install mod_wsgi...'
    wget -q "https://github.com/GrahamDumpleton/mod_wsgi/archive/4.4.21.tar.gz"
    tar -xzf '4.4.21.tar.gz'
    cd ./mod_wsgi-4.4.21
    ./configure --with-python=/usr/local/bin/python3.5
    make
    make install
