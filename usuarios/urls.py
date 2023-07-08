from django.urls import path
from usuarios.views import signup_view
from django.contrib.auth.views import LoginView, LogoutView


urlpatterns = [
    path('login/', LoginView.as_view(template_name = 'users/login.html'), name = 'login'),
    path('logout/', LogoutView.as_view(template_name = 'users/logout.html'), name = 'logout'),
    path('signup/', signup_view, name = 'signup'),
]