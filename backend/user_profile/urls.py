from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers
from user_profile.views import GetUserProfileView, UserList

from django.urls import path

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('get-user/', GetUserProfileView.as_view(), name='userProfile'),
    path('get-user-list/', UserList.as_view(), name='userList'),
]