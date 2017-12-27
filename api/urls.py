__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GPL"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.conf.urls import url
from api import views

urlpatterns = [
    # url(r'^api/$', views.snippet_list),
    url(r'^module/$', views.module_list),
    url(r'^package/$', views.package_list),
    url(r'^package/(?P<id>[0-9]+)/$', views.package_detail),
    url(r'^package/(?P<id>[0-9]+)/process/$', views.process_list),
    url(r'^process/$', views.process_add),
    url(r'^process/(?P<process_id>[0-9]+)/$', views.process_detail),
]
