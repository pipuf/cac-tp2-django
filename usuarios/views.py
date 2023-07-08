from django.shortcuts import render,redirect
from django.contrib.auth.forms import AuthenticationForm
from .forms import RegisterForm
from .models import Usuario

# Create your views here.
def signup_view(request):
    if request.method == 'GET':
        form = RegisterForm()
        context = {
            'form': form,
        }
        return render(request, './usuarios/formRegistro.html', context=context)
    elif request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            # UserProfile.objects.create(user=user)
            return redirect('/')
        context = {            
            'errors':form.errors,
            'form':RegisterForm(),
            
        }
        return render(request, './usuarios/formRegistro.html', context=context)