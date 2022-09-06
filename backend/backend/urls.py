from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/account/', include('account.urls')),
    path('api/users/', include('user_profile.urls')),
    path('api/residence/', include('residence.urls')),
]