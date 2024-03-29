from django.shortcuts import render
from django.views.generic import CreateView, DeleteView, UpdateView, DetailView, ListView  
from sucursales.models import Sucursal
from sucursales.forms import SucursalForm

# Create your views here.

class CrearSucursal(CreateView):
    template_name="./sucursales/agregar_sucursal.html"
    model= Sucursal
    fields="__all__"
    success_url = ('/sucursales/listar_sucursales')

class BorrarSucursal(DeleteView):
    template_name="./sucursales/borrar_sucursal.html"
    model= Sucursal
    fields="__all__"
    success_url = ('/sucursales/listar_sucursales')

class ActualizarSucursal(UpdateView):
    template_name="./sucursales/actualizar_sucursal.html"
    model= Sucursal
    form_class=SucursalForm
    # fields="__all__"
    success_url = ('/sucursales/listar_sucursales')

    def get_context_data(self, **kwargs):
        context = super(ActualizarSucursal, self).get_context_data(**kwargs)
        context['nombre'] = self.object.nombre
        context['domicilio'] = self.object.domicilio
        context['telefono'] = self.object.telefono
        context['mapa'] = self.object.mapa
        context['descripcion'] = self.object.descripcion
        context['isActive'] = self.object.isActive
        return context
    

class DetalleSucursal(DetailView):
    template_name="./sucursales/detalle_sucursal.html"
    model= Sucursal
    fields="__all__"
    success_url = ('/sucursales/listar_sucursales')

class ListarSucursales(ListView):
    template_name="./sucursales/listar_sucursales.html"
    model= Sucursal
    fields="__all__"
    success_url = ('/')
    
    def get_context_data(self, **kwargs):
        context = super(ListarSucursales, self).get_context_data(**kwargs)
        context['title'] = 'Lista de Sucursales'
        return context



    

