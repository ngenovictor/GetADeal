# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings
import django.contrib.gis.db.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('spatial', '0015_buildings_picture'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=50)),
                ('parent', models.ForeignKey(related_name='sub_categories', blank=True, to='application.Category', null=True)),
            ],
            options={
                'verbose_name_plural': 'category',
            },
        ),
        migrations.CreateModel(
            name='ContactMessage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=50, null=True)),
                ('email_address', models.EmailField(max_length=254, null=True)),
                ('message_content', models.TextField(max_length=500, null=True)),
                ('created', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name_of_product', models.CharField(max_length=50)),
                ('price', models.IntegerField()),
                ('picture', models.ImageField(null=True, upload_to=b'products')),
                ('quantity', models.CharField(max_length=50)),
                ('describe_the_item', models.TextField(max_length=200)),
                ('slug', models.SlugField(unique=True)),
                ('discount', models.IntegerField(null=True)),
                ('category', models.ForeignKey(to='application.Category', null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Shops',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name_of_shop', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=50)),
                ('tel_no', models.IntegerField()),
                ('county', models.CharField(max_length=50)),
                ('town', models.CharField(max_length=50)),
                ('location', django.contrib.gis.db.models.fields.PointField(srid=4326, null=True)),
                ('room_no', models.IntegerField()),
                ('describe_the_location', models.TextField(max_length=200)),
                ('describe_the_shop', models.TextField(max_length=200)),
                ('building', models.ForeignKey(to='spatial.Buildings', null=True)),
                ('owner', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'shops',
            },
        ),
        migrations.CreateModel(
            name='Try',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=50)),
                ('building', models.ForeignKey(to='spatial.Buildings', null=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserDetail',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('profile_pic', models.ImageField(null=True, upload_to=b'users')),
                ('gender', models.CharField(default=b'U', max_length=10, choices=[(b'M', b'Male'), (b'F', b'Female'), (b'U', b'Undefined')])),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='shop',
            field=models.ForeignKey(to='application.Shops'),
        ),
    ]
