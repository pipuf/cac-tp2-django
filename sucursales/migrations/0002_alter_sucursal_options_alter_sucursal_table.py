# Generated by Django 4.2.1 on 2023-07-05 04:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sucursales', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='sucursal',
            options={'ordering': ['nombre'], 'verbose_name': 'Sucursal', 'verbose_name_plural': 'Sucursales'},
        ),
        migrations.AlterModelTable(
            name='sucursal',
            table='sucursales_sucursal',
        ),
    ]
