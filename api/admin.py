__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.contrib import admin
from api.models import Module

class ModuleAdmin(admin.ModelAdmin):
    pass
admin.site.register(Module, ModuleAdmin)
