from django.urls import path
from sucursales.views import CrearSucursal,ListarSucursales


urlpatterns = [
    path('agregar_sucursal/', CrearSucursal.as_view(), name="agregar_sucursal"),
    # path('editar_sucursal/', EditarSucursal.as_view(), name="editar"),
     path('listar_sucursales/', ListarSucursales.as_view(), name="listar_sucursales"),
    # path('detalle_sucursal/', DetalleSucursal.as_view(), name="detalle"),
    # path('borrar_sucursal/', BorrarSucursal.as_view(), name="borrar"),
]