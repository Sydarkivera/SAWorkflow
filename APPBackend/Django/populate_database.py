__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
import django
import shutil, os # for deleting and recreating workdir

django.setup()

from api.models import *
import datetime

print('populate_databse starting')

# delete all old objects, if there are any.
Job.objects.all().delete()
Package.objects.all().delete()
Process.objects.all().delete()
Module.objects.all().delete()
Template.objects.all().delete()
FileType.objects.all().delete()
Variable.objects.all().delete()
GraphData.objects.all().delete()
DockerImage.objects.all().delete()

# delete files in workdir
# folders = os.listdir('/code/workdir/')
# for folder in folders:
#     shutil.rmtree('/code/workdir/' + folder)

# create new module
module1 = Module(name="Setup workdir",
                 type='1',
                 python_module='tools.Setup_workdir.setupWorkDir',
                 hidden=True,
                 tool_folder_name="Setup_workdir"
                 )
module1.save()
module2 = Module(name="Untar",
                 type='0',
                 filter='.*(\.tar)',
                 form=[{"type":"checkbox", "label":"Verbose", "identifier":"verbose", "value": "-v"}],
                 description="Untar all .tar fieles into the current folder",
                 tool_folder_name="Untar_archive",
                 command="tar xf #file -C #workdir #verbose ",
                 hidden=True
                 )
module2.save()
module3 = Module(name="ClamAV",
                 type='0',
                 form=[{"type":"checkbox", "label":"Only show infected files", "identifier":"only_found", "value":"-i"},{"type":"checkbox", "label":"Remove infected files", "identifier":"remove", "value":"--remove"}],
                 # command='[{"value":"clamscan","type":"text"},{"type":"text","value":"-r"},{"value":"-i","type":"var","name":"only_found"},{"value":"--remove","type":"var","name":"remove"},{"type":"var","name":"workdir"}]',
                 command="clamscan #only_found #remove #file",
                 tool_folder_name="ClamAV"
                 )
module3.save()

module8 = Module(name="DROID",
                 type='3',
                 form=[],
                command="/run.sh \"#file\"",
                filter='.*',
                tool_folder_name="SMART_DROID",
                docker_mount_point="/workdir",
                resultFilter=[{"type": "Containing","value": "[\\w\\W]*Missmatch: \"false\"[\\w\\W]*"},{"type": "Not containing","value": "[\\w\\W]*Missmatch: \"true\"[\\w\\W]*"}]
                 )
module8.save()

module11 = Module(name="Unoconv",
                 type='3',
                 form=[],
                command="UNOPATH=/usr/lib/Libreoffice /usr/bin/python3 /usr/bin/unoconv -f pdf -e SelectPdfVersion=1 \"#file\"",
                # command="seq -s= 100000|tr -d '[:digit:]'",
                filter='.*(\.(doc|docx))$',
                tool_folder_name="SMART_UNOCONV",
                docker_mount_point="/workdir",
                parallell_jobs=6
                 )
module11.save()
module12 = Module(name="Verapdf",
                 type='3',
                 form=[],
                command="verapdf -f 1a #file",
                filter='.*(\.pdf)',
                tool_folder_name="SMART_VERAPDF",
                docker_mount_point="/workdir",
                resultFilter=[{"type":"Containing", "value": "[\\\w\\\W]*compliant=\"1\"[\\\w\\\W]*"}]
                 )
module12.save()


# setup default templates

template1 = Template(name="Default Start", hidden=True)
template1.save()

process2 = Process(order=1,
                   template=template1,
                   module=module2,
                   value={"verbose": True}
                   )
process2.save()

template2 = Template(name="Default Done", hidden=True)
template2.save()

template3 = Template(name="Empty template")
template3.save()

# template4 = Template(name="Convert pdf")
# template4.save()
# process = Process(order=1,
#                    template=template4,
#                    module=module6)
# process.save()
# process = Process(order=2,
#                    template=template4,
#                    module=module12)
# process.save()


# create default variables
var = Variable(name="total_number_of_files", data="0")
var.save()
var = Variable(name="total_size", data="0")
var.save()
var = Variable(name="total_number_of_packages", data="0")
var.save()
var = Variable(name="total_number_of_errors", data="0")
var.save()
# system variables
var = Variable(name="work_dir_path", data="/code/workdir")
var.save()
var = Variable(name="packages_path", data="/code/test_packages")
var.save()
var = Variable(name="tools_path", data="/code/tools")
var.save()
var = Variable(name="premis_file_name", data="log/app_log.xml")
var.save()
var = Variable(name="work_dir_path_host", data="/Users/axenu/Projects/Sydarkivera/APP/workdir")
var.save()
var = Variable(name="premis_template_path", data="/code/templates/premis.json")
var.save()
var = Variable(name="premis_event_template_path", data="/code/templates/premisEvent.json")
var.save()




# default test data, TODO remove in production
# ftype = FileType(name="PDF", errors=3, total=100, size=1203000)
# ftype.save()
# ftype = FileType(name="JPG", errors=33, total=10, size=12033400)
# ftype.save()
# ftype = FileType(name="XML", errors=0, total=43, size=120340)
# ftype.save()
# ftype = FileType(name="XSD", errors=0, total=12, size=120300123)
# ftype.save()
# ftype = FileType(name="sdf", errors=0, total=12, size=120300123)
# ftype.save()
# ftype = FileType(name="Xdh4eSD", errors=0, total=12, size=120300123)
# ftype.save()
# ftype = FileType(name="fgdh", errors=0, total=12, size=120300123)
# ftype.save()
# ftype = FileType(name="wert", errors=0, total=12, size=120300123)
# ftype.save()

# graph = GraphData(date=(datetime.date.today() - datetime.timedelta(days=21)), size=1110000000, count=37954)
# graph.save()
# graph = GraphData(date=(datetime.date.today() - datetime.timedelta(days=14)), size=5834400000, count=9754)
# graph.save()
# graph = GraphData(date=(datetime.date.today() - datetime.timedelta(days=7)), size=2340000000, count=751)
# graph.save()
# graph = GraphData(date=datetime.date.today(), size=300000000, count=3452)
# graph.save()

#create default docker images

# image = DockerImage(name="vera_pdf", mountpoint="/workdir", label="verapdf")
# image.save()
# module12.dockerImage = image
# module12.save()

image = DockerImage(name="droid_worker", mountpoint="/workdir", label="Droid")
image.save()
module8.dockerImage = image
module8.save()

image = DockerImage(name="unoconv_worker", mountpoint="/workdir", label="Unoconv")
image.save()
module11.dockerImage = image
module11.save()

image = DockerImage(name="vera_pdf", mountpoint="/workdir", label="VeraPDF")
image.save()
module12.dockerImage = image
module12.save()

# create default admin users
User.objects.all().delete()
user = User.objects.create_user('admin', 'simon@axenu.com', 'admin')
user.is_superuser = True
user.is_staff = True
# user.role = 2
user.save()


print('populate_databse finished')

#create new package.
# package1 = Package(name="demo paket 1", path="/Users/axenu/Sydarkivera/toolbox/paket/af268c33-5ba8-4af5-9a44-039b10126835.tar", file_name="af268c33-5ba8-4af5-9a44-039b10126835.tar", status=0)
# package1.save()

# create some processes
# process1 = Process(order=1, package=package1, module=module1, value='{}')
# process1.save()
# process2 = Process(order=2, package=package1, module=module2, value='{}')
# process2.save()
