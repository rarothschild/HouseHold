# django imports
from django.contrib.auth.models import User
from django.views import View
# rest_framework imports
from rest_framework import generics, authentication, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
# local apps import
from user_profile.models import UserProfile
from user_profile.serializers import UserSerializer

class GetUserProfileView(APIView):
    def get(self, request, format=None):
        try:
            user = self.request.user
            username = user.username

            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserSerializer(user_profile)

            return Response({ 'profile': user_profile.data, 'username': str(username) })
        except:
            return Response({ 'error': 'Something went wrong when retrieving profile' })

class UserList(View):
    def get(self, request, pk=None):
        permission_classes = (permissions.IsAdminUser,)
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)