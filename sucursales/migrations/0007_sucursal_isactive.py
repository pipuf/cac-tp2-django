# Generated by Django 4.2.1 on 2023-07-10 02:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sucursales', '0006_rename_map_sucursal_mapa'),
    ]

    operations = [
        migrations.AddField(
            model_name='sucursal',
            name='isActive',
            field=models.BooleanField(default=True),
        ),
    ]