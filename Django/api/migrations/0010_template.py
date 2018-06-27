# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-06-26 09:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_process_allfiles'),
    ]

    operations = [
        migrations.CreateModel(
            name='Template',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.TextField()),
                ('modules', models.ManyToManyField(related_name='template', to='api.Module')),
            ],
            options={
                'ordering': ('name',),
            },
        ),
    ]
