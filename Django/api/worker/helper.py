__author__ = "Simon Nilsson"
__copyright__ = "Copyright 2018, Axenu"
__license__ = "GNU"
__version__ = "0.1"
__maintainer__ = "Simon Nilsson"
__email__ = "simon@axenu.com"
__status__ = "Development"

# for sending http requests
import requests
from time import sleep

from logging import getLogger
logger = getLogger('django')

def send_request(url, data, delay_time=4):
    if delay_time > 1000:
        logger.error(
            "fail to start command on smart docker host. Will stop retrying")
        return
    if delay_time > 4:
        sleep(delay_time)
    # figure out name of new container in network
    try:
        r = requests.put(url, data=data)
        logger.info("status code: " + str(r.status_code))
        if r.status_code != requests.codes.ok:
            r.raise_for_status()
            logger.info("could not start service, trying again")
            send_request(url, data, delay_time=delay_time*2)
    except requests.exceptions.RequestException:
        logger.info("could not start service, trying again")
        send_request(url, data, delay_time=delay_time*2)
