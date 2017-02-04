# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('application', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shops',
            name='building',
            field=models.ForeignKey(related_name='shops_name', to='spatial.Buildings', null=True),
        ),
    ]
