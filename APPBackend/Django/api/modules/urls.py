__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.conf.urls import url
from api.modules import views

urlpatterns = [
    url(r'^$', views.module_list),
    url(r'^import/$', views.module_import),
    url(r'^(?P<module_id>[0-9]+)/$', views.module),
    url(r'^(?P<module_id>[0-9]+)/export/$', views.module_export),
    url(r'^(?P<module_id>[0-9]+)/files/$', views.module_files),
]
