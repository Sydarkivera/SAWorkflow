# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-06-25 08:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20180625_0600'),
    ]

    operations = [
        migrations.AddField(
            model_name='process',
            name='progress',
            field=models.DecimalField(decimal_places=5, default=0, max_digits=10),
        ),
    ]