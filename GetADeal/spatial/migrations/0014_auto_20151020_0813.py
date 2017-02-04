# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.contrib.gis.db.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('spatial', '0013_auto_20151020_0754'),
    ]

    operations = [
        migrations.AddField(
            model_name='buildings',
            name='admin_leve',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='aeroway',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='amenity',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='barrier',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='boundary',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='building',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='craft',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='geological',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='geom',
            field=django.contrib.gis.db.models.fields.PolygonField(srid=4326, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='historic',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='land_area',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='landuse',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='leisure',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='man_made',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='military',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='name',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='natural',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='office',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='osm_id',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='osm_way_id',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='other_tags',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='place',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='shop',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='sport',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='tourism',
            field=models.CharField(max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='buildings',
            name='type',
            field=models.CharField(max_length=254, null=True),
        ),
    ]
