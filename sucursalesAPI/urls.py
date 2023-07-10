from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from sucursalesAPI import views

urlpatterns = [
    path('ListaSucursales/', views.ListaSucursales.as_view()),
    path('DetalleSucursal/<int:pk>/', views.DetalleSucursal.as_view()),
    
    # path('sucursales/', views.lista_sucursales),
    # path('sucursales/<int:pk>/', views.detalle_sucursal),
]

urlpatterns = format_suffix_patterns(urlpatterns) 