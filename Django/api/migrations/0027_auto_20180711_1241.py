# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-07-11 12:41
from __future__ import unicode_literals

from django.db import migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0026_auto_20180711_1239'),
    ]

    operations = [
        migrations.AlterField(
            model_name='module',
            name='docker',
            field=jsonfield.fields.JSONField(blank=True, default='{"dockerfile":True, "image": "", "workdir_mount_point": "", "file_mount_point": "/file.pdf"}'),
        ),
    ]