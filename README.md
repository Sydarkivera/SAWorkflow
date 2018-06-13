# Sydarkivera Workflow

## TODO:
* Add support for multiple commands in bash modules
* Add instructions for process_tasks cron_job

To run application for debugging:

## Running in development
Create a virtual env

    virtualenv venv

Activate virtual env

    source venv/bin/activate

Create log folder

    mkdir log

Install required packages

    pip install django djangorestframework django-background-tasks jsonfield

Install aurelia
    npm global install aurelia-cli

    npm install aurelia-fetch-client whatwg-fetch --save

Run django

    python manage.py runserver

Run background tasks

    python manage.py process_tasks

Start aurelia

    au run --watch

## Running on server (CentOS):
Install CentOS dependencies

    yum install epel-release
    yum groupinstall development
    yum install wget zlib-devel bzip2-devel sqlite sqlite-devel openssl-devel httpd httpd-devel yum-utils

Install python 3.5

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

Install mod_wsgi 4.4.21

    wget -q "https://github.com/GrahamDumpleton/mod_wsgi/archive/4.4.21.tar.gz"
    tar -xzf '4.4.21.tar.gz'
    cd mod_wsgi-4.4.21/
    ./configure --with-python=/usr/local/bin/python3.5
    make
    make install
    cd ..
    rm -f 4.4.21.tar.gz
    rm -rf ./mod_wsgi-4.4.21

Open port

    firewall-cmd --add-port=<Port num>/tcp --permanent
    firewall-cmd --reload

install SAWorkflow

    mkdir /toolbox
    tar -C / -xf toolbox-0.3.tar
    rm -rf toolbox-0.3.tar
    cd /toolbox/
    chown -R apache:apache /toolbox/

configure apache files: /etc/httpd/conf.d/toolbox.conf /etc/httpd/conf/httpd.conf

Remember to configure selinux for the appropriate directories.

Enable httpd (apache)

    systemctl enable httpd

setup python packages

    pip3.5 install virtualenv
    virtualenv -p python3.5 venv
    source venv/bin/activate
    pip install -r requirements.txt
    python manage.py collectstatic

compile tar program from other project (TODO move to other project)

    gcc -std=c99 viewtar.c

Configure Mysql in SAWorkflow/config/settings.py, the migrate

    python manage.py migrate

reboot and you are done

## Support

Contact simon@axenu.com or simon.nilsson@sydarkivera.se

## License

This project is licensed under the terms of the GNU (General Public License)
