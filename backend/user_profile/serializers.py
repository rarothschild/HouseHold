from django.contrib.auth.models import User
from rest_framework import serializers

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

