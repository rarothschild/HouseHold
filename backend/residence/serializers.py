from django.contrib.auth import authenticate
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

# Register Serializer
class ResidenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'streetAddress', 'zipcode', 'city')