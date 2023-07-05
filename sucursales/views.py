from django.shortcuts import render
from django.views.generic import CreateView, DeleteView, UpdateView, DetailView, ListView 
from sucursales.models import Sucursal

# Create your views here.

class CrearSucursal(CreateView):
    template_name="agregar_sucursal.html"
    model= Sucursal
    fields="__all__"
    success_url = ('/')
