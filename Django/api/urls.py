__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.conf.urls import url, include
from api import views

urlpatterns = [
    # url(r'^api/$', views.snippet_list),
    #modules
    url(r'^module/', include('api.modules.urls')),
    #packages
    url(r'^package/', include('api.packages.urls')),

    #process modification
    url(r'^process/$', views.process_add),
    url(r'^process/(?P<process_id>[0-9]+)/$', views.process_detail),
    url(r'^template/$', views.template_list),
    url(r'^template/(?P<template_id>[0-9]+)/$', views.template_detail),
    url(r'^template/(?P<template_id>[0-9]+)/process/$', views.template_process_list),
    url(r'^template/(?P<template_id>[0-9]+)/package/(?P<package_id>[0-9]+)/$', views.template_package_detail),

    url(r'^stats/dashboard/$', views.dashboardStats),

    url(r'^variables/global/$', views.variables_global),

    #containers (docker)
    url(r'^image/', include('api.images.urls')),

    url(r'^permissions/', views.permissions),
]
