__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2018, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

from django.conf.urls import url
from api.worker import views

urlpatterns = [
        # url(r'^$', views.package_list),
        url(r'^result/$', views.result),
]
