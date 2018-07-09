__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.conf.urls import url
from api import views

urlpatterns = [
    # url(r'^api/$', views.snippet_list),
    url(r'^module/$', views.module_list),
    url(r'^module/import/$', views.module_import),
    url(r'^module/(?P<id>[0-9]+)/$', views.module),
    url(r'^module/(?P<module_id>[0-9]+)/export/$', views.module_export),

    url(r'^package/$', views.package_list),
    url(r'^package/(?P<id>[0-9]+)/files/$', views.package_file_list),
    url(r'^package/(?P<id>[0-9]+)/$', views.package_detail),
    url(r'^package/(?P<id>[0-9]+)/process/$', views.process_list),
    # run workflows
    url(r'^package/(?P<package_id>[0-9]+)/execute/$', views.package_execute),
    url(r'^package/(?P<package_id>[0-9]+)/finish/$', views.package_finish),
    #process modification
    url(r'^process/$', views.process_add),
    url(r'^process/(?P<process_id>[0-9]+)/$', views.process_detail),
    url(r'^template/$', views.template_list),
    url(r'^template/(?P<template_id>[0-9]+)/$', views.template_detail),
    url(r'^template/(?P<template_id>[0-9]+)/process/$', views.template_process_list),
    url(r'^template/(?P<template_id>[0-9]+)/package/(?P<package_id>[0-9]+)/$', views.template_package_detail),

    url(r'^stats/dashboard/$', views.dashboardStats),

    url(r'^variables/global/$', views.variables_global)
]
