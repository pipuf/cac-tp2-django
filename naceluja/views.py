from django.views.generic import TemplateView, DetailView
from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from .forms import RegisterForm

# Create your views here.

# class RegisterView(TemplateView):
#     template_name="./formRegistro.html"
#     model= User
#     fields="__all__"
#     success_url = ('register')

class IndexView(TemplateView):
    template_name = 'index.html'

class MenuView(TemplateView):
    template_name = 'menuDinamico.html'

class SucursalesView(TemplateView):
    template_name = 'sucursales.html'

class RegisterView(TemplateView):
    template_name = 'formRegistro.html'


def registrar(request):
    if request.method == 'GET':
        form = RegisterForm()
        context = {
            'form': form,
        }
        return render(request,'formRegistro.html', context=context)
    elif request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
        context = {
            'errors': form.errors,
            'form': RegisterForm()
        }
        return    

# class LoginView(TemplateView):
#     template_name = 'login.html'    