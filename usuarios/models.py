from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Usuario(User,models.Model):
    nombre = models.CharField(max_length=30,null=False, blank=False)
    apellido = models.CharField(max_length=30,null=False, blank=False)
    telefono = models.CharField(max_length=14,null=True, blank=True)
    vegano = models.BooleanField(default=False)
    vegetariano = models.BooleanField(default=False)
    sinTACC = models.BooleanField(default=False)
    keto = models.BooleanField(default=False)

# class UserProfile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile', verbose_name='Usuario')
#     nombre = models.CharField(max_length=30, null=False, blank=False, verbose_name='Nombre')
#     apellido = models.CharField(max_length=30, null=False, blank=False, verbose_name='Nombre')
#     telefono = models.CharField(max_length=14, null=True, blank=True, verbose_name='Telefono')

#     def __str__(self):
#         return self.user.username