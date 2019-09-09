FROM tutum/nginx

COPY static_files/ /code/static_root

RUN rm /etc/nginx/sites-enabled/default
ADD sites-enabled/ /etc/nginx/sites-enabled
