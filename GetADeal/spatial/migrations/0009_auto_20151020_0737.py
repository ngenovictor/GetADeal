# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.contrib.gis.db.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('spatial', '0008_auto_20151020_0655'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buildings',
            name='geom',
            field=django.contrib.gis.db.models.fields.PolygonField(srid=4326),
        ),
        migrations.AlterField(
            model_name='lines',
            name='geom',
            field=django.contrib.gis.db.models.fields.LineStringField(srid=4326),
        ),
        migrations.AlterField(
            model_name='multilinestrings',
            name='geom',
            field=django.contrib.gis.db.models.fields.LineStringField(srid=4326),
        ),
        migrations.AlterField(
            model_name='multipolygons',
            name='geom',
            field=django.contrib.gis.db.models.fields.PolygonField(srid=4326),
        ),
        migrations.AlterField(
            model_name='points',
            name='geom',
            field=django.contrib.gis.db.models.fields.PointField(srid=4326),
        ),
    ]
