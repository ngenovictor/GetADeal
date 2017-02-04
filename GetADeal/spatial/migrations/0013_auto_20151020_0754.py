# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.contrib.gis.db.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('spatial', '0012_auto_20151020_0748'),
    ]

    operations = [
        migrations.AddField(
            model_name='mushroomspot',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='mushroomspot',
            name='geom',
            field=django.contrib.gis.db.models.fields.PointField(srid=4326, null=True),
        ),
        migrations.AddField(
            model_name='mushroomspot',
            name='picture',
            field=models.ImageField(null=True, upload_to=b'spatial'),
        ),
    ]
