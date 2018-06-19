__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.db import models
from jsonfield import JSONField

class Package(models.Model):
    PACKAGE_STATUS_NEW = 0
    PACKAGE_STATUS_WAITING = 1
    PACKAGE_STATUS_RUNNING = 2
    PACKAGE_STATUS_ERROR = 3
    PACKAGE_STATUS_DONE = 4
    PACKAGE_STATUS_EDITED = 5
    PACKAGE_STATUS = (
        (PACKAGE_STATUS_NEW, 'New'),
        (PACKAGE_STATUS_WAITING, 'Waiting'),
        (PACKAGE_STATUS_RUNNING, 'Running'),
        (PACKAGE_STATUS_ERROR, 'Error'),
        (PACKAGE_STATUS_DONE, 'Done'),
        (PACKAGE_STATUS_EDITED, 'Edited'),
    )
    package_id = models.AutoField(primary_key=True)
    name = models.TextField()
    path = models.TextField()
    file_name = models.TextField()
    status = models.IntegerField(choices=PACKAGE_STATUS, default=0)
    workdir = models.TextField()
    logdir = models.TextField()

class Module(models.Model):
    MODULE_TYPE_COMMAND = 0
    MODULE_TYPE_PYTHON = 1
    MODULE_TYPES = (
        (0, 'Command'),
        (1, 'Python module'),
        (2, 'bash script'),
    )
    module_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, default='')
    type = models.IntegerField(choices=MODULE_TYPES, default=0)
    form = JSONField(default=[])
    python_module = models.CharField(max_length=100)
    hidden = models.BooleanField(default=False)
    command = JSONField(default=[])

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
    package = models.ForeignKey(Package, related_name='processes', on_delete=models.CASCADE)
    module = models.ForeignKey(Module, related_name='processes', on_delete=models.PROTECT)
    value = JSONField(default={})
    status = models.IntegerField(choices=PROCESS_STATUS, default=0)
    log_path = models.CharField(max_length=100, blank=True, default='')
    err_path = models.CharField(max_length=100, blank=True, default='')

    class Meta:
        ordering = ('order',)

    def __str__(self):
        return '%d: %d' % (self.process_id, self.order)
