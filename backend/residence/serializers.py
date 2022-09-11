from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import Residence

# Register Serializer
class ResidenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Residence
        fields = ('id', 'streetAddress', 'zipCode', 'city','country')