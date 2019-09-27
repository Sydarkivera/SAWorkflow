# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-07-25 13:28
from __future__ import unicode_literals

import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import jsonfield.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0008_alter_user_username_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=30, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=30, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
            ],
            options={
                'abstract': False,
                'verbose_name_plural': 'users',
                'verbose_name': 'user',
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='DockerImage',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, default='', max_length=100)),
                ('label', models.CharField(blank=True, default='', max_length=100)),
                ('mountpoint', models.CharField(blank=True, default='', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='FileType',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='', max_length=100)),
                ('errors', models.IntegerField(default=0)),
                ('total', models.IntegerField(default=0)),
                ('size', models.BigIntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='GraphData',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('date', models.DateField()),
                ('size', models.BigIntegerField(default=0)),
                ('count', models.BigIntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Module',
            fields=[
                ('module_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, default='', max_length=100)),
                ('type', models.IntegerField(blank=True, choices=[(0, 'Command'), (1, 'Python module'), (2, 'Docker Container')], default=0)),
                ('form', jsonfield.fields.JSONField(blank=True, default=[])),
                ('hidden', models.BooleanField(default=False)),
                ('python_module', models.CharField(blank=True, default='', max_length=100)),
                ('command', models.CharField(blank=True, default='', max_length=10000)),
                ('tool_folder_name', models.CharField(blank=True, default='', max_length=100)),
                ('docker_mount_point', models.CharField(blank=True, default='', max_length=100)),
                ('description', models.CharField(blank=True, default='', max_length=400)),
                ('filter', models.CharField(blank=True, default='', max_length=200)),
                ('resultFilter', jsonfield.fields.JSONField(blank=True, default=[])),
                ('dockerImage', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='modules', to='api.DockerImage')),
            ],
            options={
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Package',
            fields=[
                ('package_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.TextField()),
                ('path', models.TextField()),
                ('file_name', models.TextField()),
                ('status', models.IntegerField(choices=[(0, 'New'), (1, 'Waiting'), (2, 'Running'), (3, 'Error'), (4, 'Done'), (5, 'Edited'), (6, 'Finished')], default=0)),
                ('workdir', models.TextField()),
                ('logdir', models.TextField()),
                ('statistics', jsonfield.fields.JSONField(default={})),
            ],
        ),
        migrations.CreateModel(
            name='Process',
            fields=[
                ('process_id', models.AutoField(primary_key=True, serialize=False)),
                ('order', models.IntegerField(default=10000)),
                ('value', jsonfield.fields.JSONField(default={})),
                ('status', models.IntegerField(choices=[(0, 'New'), (1, 'Waiting'), (2, 'Running'), (3, 'Error'), (4, 'Done'), (5, 'Paused'), (6, 'Edited')], default=0)),
                ('log_path', models.CharField(blank=True, default='', max_length=100)),
                ('err_path', models.CharField(blank=True, default='', max_length=100)),
                ('progress', models.DecimalField(decimal_places=5, default=0, max_digits=10)),
                ('allFiles', jsonfield.fields.JSONField(default=[])),
                ('logs', jsonfield.fields.JSONField(default=[])),
                ('errors', jsonfield.fields.JSONField(default=[])),
                ('module', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='processes', to='api.Module')),
                ('package', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='processes', to='api.Package')),
            ],
            options={
                'ordering': ('order',),
            },
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.PositiveSmallIntegerField(choices=[(1, 'Normal User'), (2, 'Admin')], primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Template',
            fields=[
                ('template_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.TextField()),
            ],
            options={
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Variable',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, default='', max_length=100)),
                ('data', jsonfield.fields.JSONField(default={})),
            ],
        ),
        migrations.AddField(
            model_name='process',
            name='template',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='processes', to='api.Template'),
        ),
        migrations.AddField(
            model_name='package',
            name='active_template',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='packages', to='api.Template'),
        ),
        migrations.AddField(
            model_name='user',
            name='roles',
            field=models.ManyToManyField(to='api.Role'),
        ),
        migrations.AddField(
            model_name='user',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions'),
        ),
    ]