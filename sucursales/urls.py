from django.contrib import admin
from django.urls import path
from sucursales.views import CrearSucursal


urlpatterns = [
    path('agregar_sucursal/', CrearSucursal.as_view(), name="crear"),
]
