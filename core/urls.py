__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^package/(?P<id>[0-9]+)/$', views.package, name='package_overview'),
    url(r'^package/(?P<id>[0-9]+)/execute/$', views.execute, name='execute_package_flow'),
    url(r'^package/(?P<id>[0-9]+)/status/$', views.status, name='display status'),
    url(r'^process/(?P<process_id>[0-9]+)/error_log$', views.display_error_log),
    url(r'^process/(?P<process_id>[0-9]+)/info_log$', views.display_info_log),
]
