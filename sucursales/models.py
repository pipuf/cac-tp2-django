from django.db import models
from django.urls import reverse 


class Sucursal(models.Model):
    nombre = models.CharField(max_length=100, blank=False, null=False)
    domicilio = models.CharField(max_length=250)
    telefono = models.CharField(max_length=20)
    mapa = models.TextField(blank=False, null=False)
    descripcion = models.TextField(blank=False, null=False)
    isActive = models.BooleanField(default=True)


    def __str__(self):
        return self.nombre
    
    class Meta:
        verbose_name = 'Sucursal'
        verbose_name_plural = 'Sucursales'
        ordering = ['nombre']
        db_table = 'sucursal'
    
    def get_absolute_url(self):
        return reverse('sucursales:sucursal-detail', kwargs={'pk': self.pk})
    

