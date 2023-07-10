from django.urls import path,include 
from sucursales.views import CrearSucursal,ListarSucursales,ActualizarSucursal,DetalleSucursal,BorrarSucursal
from sucursales.models import Sucursal

urlpatterns = [
    path('agregar_sucursal/', CrearSucursal.as_view(), name="agregar_sucursal"),
    path('actualizar_sucursal/<int:pk>', ActualizarSucursal.as_view(), name="actualizar_sucursal"),
    path('listar_sucursales/', ListarSucursales.as_view(), name="listar_sucursales"),
    path('detalle_sucursal/<int:pk>', DetalleSucursal.as_view(), name="detalle_sucursal"),
    path('borrar_sucursal/<int:pk>', BorrarSucursal.as_view(), name="borrar_sucursal"),
 ]