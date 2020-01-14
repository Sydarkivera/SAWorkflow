__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.conf.urls import url
from api.packages import views

urlpatterns = [
        url(r'^$', views.package_list),
        url(r'^(?P<package_id>[0-9]+)/files/$', views.package_files),
        url(r'^(?P<id>[0-9]+)/$', views.package_detail),
        url(r'^(?P<id>[0-9]+)/process/$', views.process_list),
        url(r'^(?P<package_id>[0-9]+)/abort/$', views.package_abort),
        # run workflows
        url(r'^(?P<package_id>[0-9]+)/execute/$', views.package_execute),
        url(r'^(?P<package_id>[0-9]+)/finish/$', views.package_finish),
]
