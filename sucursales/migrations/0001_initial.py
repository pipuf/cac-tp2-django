# Generated by Django 4.2.1 on 2023-07-05 04:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sucursal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('domicilio', models.CharField(max_length=250)),
                ('telefono', models.CharField(max_length=20)),
                ('boton', models.CharField(max_length=20)),
                ('mapa', models.TextField()),
                ('descripcion', models.TextField()),
            ],
        ),
    ]
