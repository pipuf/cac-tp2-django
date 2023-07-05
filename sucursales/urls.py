from django.urls import path
from sucursales.views import CrearSucursal


urlpatterns = [
    path('agregar_sucursal/', CrearSucursal.as_view(), name="crear"),
    # path('editar_sucursal/', EditarSucursal.as_view(), name="editar"),
    # path('listar_sucursal/', ListarSucursal.as_view(), name="listar"),
    # path('detalle_sucursal/', DetalleSucursal.as_view(), name="detalle"),
    # path('borrar_sucursal/', BorrarSucursal.as_view(), name="borrar"),
]