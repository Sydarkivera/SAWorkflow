# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-07-03 12:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_auto_20180703_1203'),
    ]

    operations = [
        migrations.AddField(
            model_name='filetype',
            name='size',
            field=models.BigIntegerField(default=0),
        ),
    ]