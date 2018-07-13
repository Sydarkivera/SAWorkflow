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

django.setup()

from django.contrib.auth.models import User
from api.models import *
import datetime

print('populate_databse starting')

# delete all old objects, if there are any.
Package.objects.all().delete()
Process.objects.all().delete()
Module.objects.all().delete()
Template.objects.all().delete()
FileType.objects.all().delete()
Variable.objects.all().delete()
GraphData.objects.all().delete()
DockerImage.objects.all().delete()

# create new module
module1 = Module(name="Setup workdir",
                 type='1',
                 python_module='tools.Setup_workdir.setupWorkDir',
                 hidden=True,
                 module_id=0,
                 tool_folder_name="Setup_workdir"
                 )
module1.save()
module2 = Module(name="Untar archive",
                 type='1',
                 form='[{"type":"checkbox", "label":"Verbose", "identifier":"verbose"}, {"type":"checkbox", "label":"Deleta archive after", "identifier":"delete_archive"}]',
                 python_module='tools.Untar_archive.untar',
                 hidden=True,
                 module_id=1,
                 tool_folder_name="Untar_archive"
                 )
module2.save()
module3 = Module(name="ClamAV",
                 type='0',
                 form='[{"type":"checkbox", "label":"Only show infected files", "identifier":"only_found", "value":"-i"},{"type":"checkbox", "label":"Remove infected files", "identifier":"remove", "value":"--remove"}]',
                 # command='[{"value":"clamscan","type":"text"},{"type":"text","value":"-r"},{"value":"-i","type":"var","name":"only_found"},{"value":"--remove","type":"var","name":"remove"},{"type":"var","name":"workdir"}]',
                 command="clamscan #only_found #remove #file",
                 module_id=2,
                 tool_folder_name="ClamAV"
                 )
module3.save()
module4 = Module(name="VeraPDF validate pdf1/a",
                 type='0',
                 form='[]',
                 # command='[{"value":"verapdf","type":"text"}, {"type":"var", "name":"file"}]',
                 command="verapdf #file",
                 module_id=3,
                 filter='.*(\.pdf)',
                 resultFilter='[{"type":"Containing", "value": "[\\\w\\\W]*compliant=\\"1\\"[\\\w\\\W]*"}]',
                 tool_folder_name="VeraPDF_validate_pdf1/a"
                 )
module4.save()
module5 = Module(name="DROID",
                 type='2',
                 form='[]',
                 # command='[{"value":"verapdf","type":"text"}, {"type":"var", "name":"file"}]',
                 command="/droid.sh -a #file -p /profile.txt",
                 # command="ls -al /workdir",
                 module_id=4,
                 filter='.*(\.pdf)',
                 tool_folder_name="DROID",
                 docker_mount_point="/workdir"
                 )
module5.save()
# module4 = Module(name="Untar cmd",
#                  type='0',
#                  form='[{"type":"checkbox", "label":"Visa bara infekterade filer", "identifier":"only_found"}]',
#                  python_module='a',
#                  command='[{"type":"text","value":"tar"},{"type":"text","value":"-x"},{"name":"verbose","type":"var","value":"-v"},{"type":"text","value":"-f"},{"name":"tar_path","type":"var"},{"type":"text","value":"-C"},{"name":"workdir","type":"var"}]',
#                  module_id=4,
#                  )
# module4.save()

# setup default templates

template1 = Template(name="Default Start",
                     template_id=0)
template1.save()

process1 = Process(order=0,
                   template=template1,
                   module=module1)
process1.save()
process2 = Process(order=1,
                   template=template1,
                   module=module2)
process2.save()
# process3 = Process(order=2,
#                    template=template1,
#                    module=module3)
# process3.save()
# process4 = Process(order=3,
#                    template=template1,
#                    module=module4)
# process4.save()
# process5 = Process(order=4,
#                    template=template1,
#                    module=module5)
# process5.save()

template2 = Template(name="Default Done",
                     template_id=1)
template2.save()

template3 = Template(name="Empty template",
                     template_id=2)
template3.save()

# create default variables # TODO set data to 0 for all variables
var = Variable(name="total_number_of_files", data="134")
var.save()
var = Variable(name="total_size", data="12345578")
var.save()
var = Variable(name="total_number_of_packages", data="2")
var.save()
var = Variable(name="total_number_of_errors", data="34")
var.save()
# system variables
var = Variable(name="work_dir_path", data="/code/workdir")
var.save()
var = Variable(name="packages_path", data="/code/test_packages")
var.save()
var = Variable(name="tools_path", data="/code/tools")
var.save()
var = Variable(name="premis_file_name", data="app_log.xml")
var.save()
var = Variable(name="work_dir_path_host", data="/Users/axenu/Sydarkviera/SAWorkflow/Django/workdir/")
var.save()

# default test data, TODO remove in production
ftype = FileType(name="PDF", errors=3, total=100, size=1203000)
ftype.save()
ftype = FileType(name="JPG", errors=33, total=10, size=12033400)
ftype.save()
ftype = FileType(name="XML", errors=0, total=43, size=120340)
ftype.save()
ftype = FileType(name="XSD", errors=0, total=12, size=120300123)
ftype.save()
ftype = FileType(name="sdf", errors=0, total=12, size=120300123)
ftype.save()
ftype = FileType(name="Xdh4eSD", errors=0, total=12, size=120300123)
ftype.save()
ftype = FileType(name="fgdh", errors=0, total=12, size=120300123)
ftype.save()
ftype = FileType(name="wert", errors=0, total=12, size=120300123)
ftype.save()

graph = GraphData(date=(datetime.date.today() - datetime.timedelta(days=21)), size=1110000000, count=37954)
graph.save()
graph = GraphData(date=(datetime.date.today() - datetime.timedelta(days=14)), size=5834400000, count=9754)
graph.save()
graph = GraphData(date=(datetime.date.today() - datetime.timedelta(days=7)), size=2340000000, count=751)
graph.save()
graph = GraphData(date=datetime.date.today(), size=300000000, count=3452)
graph.save()

#create default docker images
image = DockerImage(id=0, name="droid", mountpoint="/workdir/")
image.save()
module5.dockerImage = image
module5.save()


# create default admin users
User.objects.all().delete()
user = User.objects.create_user('admin', 'simon@axenu.com', 'admin')
user.is_superuser = True
user.is_staff = True
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
