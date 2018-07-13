__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.db import models
from jsonfield import JSONField

#cusom field for bigint
# from django.db.models.fields import IntegerField
# from django.conf import settings

class BigIntegerField(models.IntegerField):
    empty_strings_allowed=False
    def get_internal_type(self):
        return "BigIntegerField"
    def db_type(self):
        return 'bigint' # Note this won't work with Oracle.



class Template(models.Model):
    template_id = models.AutoField(primary_key=True)
    name = models.TextField()
    # processes = models.ManyToManyField(Process, related_name='template')

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return '%d: %d' % (self.template_id, self.name)


class DockerImage(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, default='')
    mountpoint = models.CharField(max_length=100, blank=True, default='') # example, mount at /workdir in conainer

class Package(models.Model):
    PACKAGE_STATUS_NEW = 0
    PACKAGE_STATUS_WAITING = 1
    PACKAGE_STATUS_RUNNING = 2
    PACKAGE_STATUS_ERROR = 3
    PACKAGE_STATUS_DONE = 4
    PACKAGE_STATUS_EDITED = 5
    PACKAGE_STATUS_FINISHED = 6
    PACKAGE_STATUS = (
        (PACKAGE_STATUS_NEW, 'New'),
        (PACKAGE_STATUS_WAITING, 'Waiting'),
        (PACKAGE_STATUS_RUNNING, 'Running'),
        (PACKAGE_STATUS_ERROR, 'Error'),
        (PACKAGE_STATUS_DONE, 'Done'),
        (PACKAGE_STATUS_EDITED, 'Edited'),
        (PACKAGE_STATUS_FINISHED, 'Finished'),
    )
    package_id = models.AutoField(primary_key=True) # Example: 1
    name = models.TextField() # Example: Ljungby uttag 1
    path = models.TextField() # Example: /code/test_packages/af268c33-5ba8-4af5-9a44-039b10126835.tar
    file_name = models.TextField() # Example: af268c33-5ba8-4af5-9a44-039b10126835.tar
    status = models.IntegerField(choices=PACKAGE_STATUS, default=0)
    workdir = models.TextField()
    logdir = models.TextField()
    statistics = JSONField(default={})
    # active_template = models.ForeignKey()
    active_template = models.ForeignKey(Template, related_name='packages', on_delete=models.PROTECT, blank = True, null = True)


class Module(models.Model):
    MODULE_TYPE_COMMAND = 0
    MODULE_TYPE_PYTHON = 1
    MODULE_TYPE_DOCKER = 2
    MODULE_TYPES = (
        (MODULE_TYPE_COMMAND, 'Command'),
        (MODULE_TYPE_PYTHON, 'Python module'),
        (MODULE_TYPE_DOCKER, 'Docker Container'),
    )
    module_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, default='')
    type = models.IntegerField(choices=MODULE_TYPES, default=0, blank=True)
    form = JSONField(default=[], blank=True)
    hidden = models.BooleanField(default=False, blank=True)
    python_module = models.CharField(max_length=100, default='', blank=True)
    command = models.CharField(max_length=10000, default='', blank=True)
    tool_folder_name = models.CharField(max_length=100, default='', blank=True)
    docker_mount_point = models.CharField(max_length=100, default='', blank=True)

    #For docker, save some settings, like if it is a dockerfile or an image, where to mount workdir/files
    # docker = JSONField(default='{"dockerfile":"1", "image": "", "workdir_mount_point": "", "file_mount_point": "/file.pdf"}', blank=True)
    dockerImage = models.ForeignKey(DockerImage, related_name='modules', on_delete=models.PROTECT, blank = True, null=True)

    # for handling mulitfile tools:
    # multifile = models.BooleanField(default=False)
    filter = models.CharField(max_length=200, default='.*', blank=True)
    resultFilter = JSONField(default=[], blank=True)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return '%s: %d' % (self.name, self.type)


class Process(models.Model):
    PROCESS_STATUS_DEFAULT = 0
    PROCESS_STATUS_WAITING = 1
    PROCESS_STATUS_RUNNING = 2
    PROCESS_STATUS_ERROR = 3
    PROCESS_STATUS_DONE = 4
    PROCESS_STATUS_PAUSED = 5
    PROCESS_STATUS_EDITED = 6
    PROCESS_STATUS = (
        (PROCESS_STATUS_DEFAULT, 'New'),
        (PROCESS_STATUS_WAITING, 'Waiting'),
        (PROCESS_STATUS_RUNNING, 'Running'),
        (PROCESS_STATUS_ERROR, 'Error'),
        (PROCESS_STATUS_DONE, 'Done'),
        (PROCESS_STATUS_PAUSED, 'Paused'), # is it possible?
        (PROCESS_STATUS_EDITED, 'Edited'),
    )
    process_id = models.AutoField(primary_key=True)
    order = models.IntegerField(default=10000)
    package = models.ForeignKey(Package, related_name='processes', on_delete=models.CASCADE, blank = True, null=True)
    template = models.ForeignKey(Template, related_name='processes', on_delete=models.CASCADE, blank = True, null=True)
    module = models.ForeignKey(Module, related_name='processes', on_delete=models.PROTECT)
    value = JSONField(default={})
    status = models.IntegerField(choices=PROCESS_STATUS, default=0)
    log_path = models.CharField(max_length=100, blank=True, default='')
    err_path = models.CharField(max_length=100, blank=True, default='')

    # progress/result
    # % complete
    progress = models.DecimalField(default=0, max_digits=10, decimal_places=5)
    allFiles = JSONField(default=[])
    errors = JSONField(default=[])


    class Meta:
        ordering = ('order',)

    def __str__(self):
        return '%d: %d' % (self.process_id, self.order)



# number of packages
# total size
# number of files
# number of errors
class Variable(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, default='')
    data = JSONField(default={})

class FileType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default='')
    errors = models.IntegerField(default=0)
    total = models.IntegerField(default=0)
    size = models.BigIntegerField(default=0) # in bytes

# MB over time and packages over time filled by task run at cron time once a week
class GraphData(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateField()
    size = models.BigIntegerField(default=0) # in bytes
    count = models.BigIntegerField(default=0) # number of files
