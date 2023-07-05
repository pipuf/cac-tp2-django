from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Sucursal(models.Model):
    nombre = models.CharField(max_length=100, blank=False, null=False)
    domicilio = models.CharField(max_length=250)
    telefono = models.CharField(max_length=20)
    boton = models.CharField(max_length=20, blank=False, null=False)
    iFrame = models.TextField(blank=False, null=False)
    descripcion = models.TextField(blank=False, null=False)

    # def __str__(self):
    #     return f"El vino: {self.nombre} con rating {self.abv}"
    
    def get_fields(self):
        return [
            (field.verbose_name, field.value_from_object(self))
            for field in self.__class__._meta.fields[1:]
        ]