import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
import django
django.setup()

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
                 hidden=True,
                 )
module1.save()
module2 = Module(name="Untar archive",
                 type='1',
                 form='[{"type":"checkbox", "label":"Verbose", "identifier":"verbose"}, {"type":"checkbox", "label":"Deleta archive after", "identifier":"delete_archive"}]',
                 python_module='tools.untar',
                 )
module2.save()
module3 = Module(name="tar",
                 type='1',
                 form='[{"type":"text", "label":"filename2", "identifier":"filename"},{"type":"checkbox", "label":"verbose2", "identifier":"verbose"}]',
                 python_module='tools.untar.untar',
                 )
module3.save()

#create new package.
# package1 = Package(name="demo paket 1", path="/Users/axenu/Sydarkivera/toolbox/paket/af268c33-5ba8-4af5-9a44-039b10126835.tar", file_name="af268c33-5ba8-4af5-9a44-039b10126835.tar", status=0)
# package1.save()

# create some processes
# process1 = Process(order=1, package=package1, module=module1, value='{}')
# process1.save()
# process2 = Process(order=2, package=package1, module=module2, value='{}')
# process2.save()
