from django import forms
from sucursales.models import Sucursal

class SucursalForm(forms.ModelForm):
    class Meta:
        model = Sucursal
        fields = '__all__'