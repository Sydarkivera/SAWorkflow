# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-07-12 13:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0034_module_docker'),
    ]

    operations = [
        migrations.CreateModel(
            name='DockerImage',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, default='', max_length=100)),
                ('mountpoint', models.CharField(blank=True, default='', max_length=100)),
            ],
        ),
    ]