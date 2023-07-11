from django import forms
from sucursales.models import Sucursal

class SucursalForm(forms.ModelForm):
    # isActive = forms.BooleanField(initial=True)
    class Meta:
        model = Sucursal
        fields = '__all__'
