# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('spatial', '0014_auto_20151020_0813'),
    ]

    operations = [
        migrations.AddField(
            model_name='buildings',
            name='picture',
            field=models.ImageField(null=True, upload_to=b'spatial/buildings'),
        ),
    ]
