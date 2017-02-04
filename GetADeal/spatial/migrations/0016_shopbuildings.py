# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.contrib.gis.db.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('spatial', '0015_buildings_picture'),
    ]

    operations = [
        migrations.CreateModel(
            name='ShopBuildings',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=254, null=True)),
                ('town', models.CharField(max_length=50, null=True)),
                ('type', models.CharField(max_length=254, null=True)),
                ('picture', models.ImageField(null=True, upload_to=b'spatial/shopbuildings')),
                ('geom', django.contrib.gis.db.models.fields.PolygonField(srid=4326, null=True)),
            ],
        ),
    ]
