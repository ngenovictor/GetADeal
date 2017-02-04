# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('spatial', '0003_mushroomspot'),
    ]

    operations = [
        migrations.AddField(
            model_name='mushroomspot',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='mushroomspot',
            name='picture',
            field=models.ImageField(null=True, upload_to=b'spatial'),
        ),
    ]
