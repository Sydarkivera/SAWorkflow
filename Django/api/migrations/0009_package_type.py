# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2019-09-09 11:35
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20181008_1650'),
    ]

    operations = [
        migrations.AddField(
            model_name='package',
            name='type',
            field=models.IntegerField(choices=[(0, 'Sip'), (1, 'Tar'), (2, 'Folder')], default=0),
        ),
    ]
