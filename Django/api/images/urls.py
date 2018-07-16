__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2017, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.conf.urls import url
from api.images import views

urlpatterns = [
    url(r'^$', views.image_list),
    url(r'^(?P<image_id>[0-9]+)/$', views.image_detail),
    url(r'^(?P<image_id>[0-9]+)/export/$', views.image_export),
    url(r'^import/$', views.image_import),
]
