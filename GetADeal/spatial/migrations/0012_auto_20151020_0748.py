# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('spatial', '0011_auto_20151020_0747'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mushroomspot',
            name='description',
        ),
        migrations.RemoveField(
            model_name='mushroomspot',
            name='geom',
        ),
        migrations.RemoveField(
            model_name='mushroomspot',
            name='picture',
        ),
    ]
