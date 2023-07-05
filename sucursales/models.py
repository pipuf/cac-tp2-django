from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Sucursal(models.Model):
    nombre = models.CharField(max_length=100, blank=False, null=False)
    domicilio = models.CharField(max_length=250)
    telefono = models.CharField(max_length=20)
    boton = models.CharField(max_length=20, blank=False, null=False)
    iFrame = models.TextField(blank=False, null=False)
    descripcion = models.TextField(blank=False, null=False)
