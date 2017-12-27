from django.contrib import admin
from api.models import Module

class ModuleAdmin(admin.ModelAdmin):
    pass
admin.site.register(Module, ModuleAdmin)
