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

# delete all old objects, if there are any.
Package.objects.all().delete()
Process.objects.all().delete()
Module.objects.all().delete()

# create new module
module1 = Module(name="Setup workdir",
                 type='1',
                 form='[]',
                 python_module='tools.setupWorkDir',
                 hidden=False,
                 module_id=1,
                 )
module1.save()
module2 = Module(name="Untar archive",
                 type='1',
                 form='[{"type":"checkbox", "label":"Verbose", "identifier":"verbose"}, {"type":"checkbox", "label":"Deleta archive after", "identifier":"delete_archive"}]',
                 python_module='tools.untar',
                 module_id=2,
                 )
module2.save()
module3 = Module(name="ClamAV",
                 type='0',
                 form='[{"type":"checkbox", "label":"Visa bara infekterade filer", "identifier":"only_found"},{"type":"checkbox", "label":"Ta bort infekterade filer", "identifier":"remove"}]',
                 python_module='a',
                 command='[{"value":"clamscan","type":"text"}{"type":"text","value":"-r"},,{"value":"-i","type":"var","name":"only_found"},{"value":"--remove","type":"var","name":"remove"},{"type":"var","name":"workdir"}]'
                 module_id=3,
                 )
module3.save()
module4 = Module(name="Untar cmd",
                 type='0',
                 form='[{"type":"checkbox", "label":"Visa bara infekterade filer", "identifier":"only_found"}]',
                 python_module='a',
                 command='[{"type":"text","value":"tar"},{"type":"text","value":"-x"},{"name":"verbose","type":"var","value":"-v"},{"type":"text","value":"-f"},{"name":"tar_path","type":"var"},{"type":"text","value":"-C"},{"name":"workdir","type":"var"}]'
                 module_id=3,
                 )
module4.save()

# create default admin users
User.objects.all().delete()
user = User.objects.create_user('admin', 'lennon@thebeatles.com', 'admin')
user.is_superuser = True
user.is_staff = True
user.save()

#create new package.
# package1 = Package(name="demo paket 1", path="/Users/axenu/Sydarkivera/toolbox/paket/af268c33-5ba8-4af5-9a44-039b10126835.tar", file_name="af268c33-5ba8-4af5-9a44-039b10126835.tar", status=0)
# package1.save()

# create some processes
# process1 = Process(order=1, package=package1, module=module1, value='{}')
# process1.save()
# process2 = Process(order=2, package=package1, module=module2, value='{}')
# process2.save()
