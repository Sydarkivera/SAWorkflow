# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-07-12 13:55
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0035_dockerimage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='module',
            name='docker',
        ),
        migrations.AddField(
            model_name='module',
            name='dockerImage',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='modules', to='api.DockerImage'),
        ),
    ]