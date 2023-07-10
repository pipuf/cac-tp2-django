from rest_framework import serializers
from sucursales.models import Sucursal

class SucursalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sucursal
        fields = ['id', 'nombre', 'domicilio', 'telefono', 'mapa', 'descripcion', 'isActive']

class ListaSucursalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sucursal
        fields = ['id', 'nombre','isActive']

