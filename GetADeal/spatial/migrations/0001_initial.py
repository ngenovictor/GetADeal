# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.contrib.gis.db.models.fields


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lines',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('osm_id', models.CharField(max_length=254)),
                ('name', models.CharField(max_length=254)),
                ('highway', models.CharField(max_length=254)),
                ('waterway', models.CharField(max_length=254)),
                ('aerialway', models.CharField(max_length=254)),
                ('barrier', models.CharField(max_length=254)),
                ('man_made', models.CharField(max_length=254)),
                ('other_tags', models.CharField(max_length=254)),
                ('geom', django.contrib.gis.db.models.fields.LineStringField(srid=-1)),
            ],
        ),
        migrations.CreateModel(
            name='MultiLineStrings',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('osm_id', models.CharField(max_length=254)),
                ('name', models.CharField(max_length=254)),
                ('type', models.CharField(max_length=254)),
                ('other_tags', models.CharField(max_length=254)),
                ('geom', django.contrib.gis.db.models.fields.LineStringField(srid=-1)),
            ],
        ),
        migrations.CreateModel(
            name='MultiPolygons',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('osm_id', models.CharField(max_length=254)),
                ('osm_way_id', models.CharField(max_length=254)),
                ('name', models.CharField(max_length=254)),
                ('type', models.CharField(max_length=254)),
                ('aeroway', models.CharField(max_length=254)),
                ('amenity', models.CharField(max_length=254)),
                ('admin_leve', models.CharField(max_length=254)),
                ('barrier', models.CharField(max_length=254)),
                ('boundary', models.CharField(max_length=254)),
                ('building', models.CharField(max_length=254)),
                ('craft', models.CharField(max_length=254)),
                ('geological', models.CharField(max_length=254)),
                ('historic', models.CharField(max_length=254)),
                ('land_area', models.CharField(max_length=254)),
                ('landuse', models.CharField(max_length=254)),
                ('leisure', models.CharField(max_length=254)),
                ('man_made', models.CharField(max_length=254)),
                ('military', models.CharField(max_length=254)),
                ('natural', models.CharField(max_length=254)),
                ('office', models.CharField(max_length=254)),
                ('place', models.CharField(max_length=254)),
                ('shop', models.CharField(max_length=254)),
                ('sport', models.CharField(max_length=254)),
                ('tourism', models.CharField(max_length=254)),
                ('other_tags', models.CharField(max_length=254)),
                ('geom', django.contrib.gis.db.models.fields.PolygonField(srid=-1)),
            ],
        ),
        migrations.CreateModel(
            name='Points',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('osm_id', models.CharField(max_length=254)),
                ('name', models.CharField(max_length=254)),
                ('barrier', models.CharField(max_length=254)),
                ('highway', models.CharField(max_length=254)),
                ('ref', models.CharField(max_length=254)),
                ('address', models.CharField(max_length=254)),
                ('is_in', models.CharField(max_length=254)),
                ('place', models.CharField(max_length=254)),
                ('man_made', models.CharField(max_length=254)),
                ('other_tags', models.CharField(max_length=254)),
                ('geom', django.contrib.gis.db.models.fields.PointField(srid=-1)),
            ],
        ),
    ]
