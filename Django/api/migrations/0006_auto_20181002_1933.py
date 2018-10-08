# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-10-02 19:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_job'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='file_index',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='job',
            name='file_name',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
    ]
