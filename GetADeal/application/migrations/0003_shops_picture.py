# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('application', '0002_auto_20151105_1752'),
    ]

    operations = [
        migrations.AddField(
            model_name='shops',
            name='picture',
            field=models.ImageField(null=True, upload_to=b'shops'),
        ),
    ]
