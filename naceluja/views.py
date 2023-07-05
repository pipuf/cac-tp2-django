from django.views.generic import TemplateView

class IndexView(TemplateView):
    template_name = 'index.html'

class MenuView(TemplateView):
    template_name = 'menuDinamico.html'

class SucursalesView(TemplateView):
    template_name = 'sucursales.html'

class RegisterView(TemplateView):
    template_name = 'formRegistro.html'