# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.contrib.gis.db.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('spatial', '0006_auto_20151020_0723'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buildings',
            name='geom',
            field=django.contrib.gis.db.models.fields.PolygonField(srid=4326),
        ),
    ]
