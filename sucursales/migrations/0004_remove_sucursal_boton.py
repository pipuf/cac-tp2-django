# Generated by Django 4.2.1 on 2023-07-09 22:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sucursales', '0003_alter_sucursal_table'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sucursal',
            name='boton',
        ),
    ]
