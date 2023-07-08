from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from usuarios.models import Usuario

class RegisterForm(UserCreationForm):
    telefono = forms.CharField(max_length=14)
    vegano = forms.BooleanField()
    vegetariano = forms.BooleanField()
    sinTACC = forms.BooleanField()
    keto = forms.BooleanField()

    class Meta:
        model = User
        # Usuario._meta.get_field('email')._unique = True
        fields = ['username','last_name','telefono','email','password1','password2','sinTACC','vegetariano','vegano','keto']

# class UserProfileForm(forms.ModelForm):
#     class Meta:
#         model = UserProfile
#         fields = ['phone', 'birth_date', 'profile_image']