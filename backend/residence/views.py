from django.shortcuts import render
from rest_framework import generics, permissions, serializers
from rest_framework.response import Response

from residence.models import Residence
from residence.serializers import ResidenceSerializer

# Create your views here.
class GetResidence(generics.GenericAPIView):
    serializer_class = ResidenceSerializer
    permission_classes = [ permissions.IsAuthenticated ]
    def get(self, request, *args, **kwargs):
        return Residence.objects.all()

class GetResidenceList(generics.GenericAPIView):
    serializer_class = ResidenceSerializer
    permission_classes = [ permissions.IsAuthenticated ]
    def get(self, request, *args, **kwargs):
        return Residence.objects.all()

class AddResidence(generics.GenericAPIView):
    serializer_class = ResidenceSerializer
    permission_classes = [ permissions.IsAuthenticated ]
    def get(self, request, *args, **kwargs):
        return Residence.objects.all()

class AddTenant(generics.GenericAPIView):
    serializer_class = ResidenceSerializer
    permission_classes = [ permissions.IsAuthenticated ]
    def get(self, request, *args, **kwargs):
        return Residence.objects.all()

class RemoveResidence(generics.GenericAPIView):
    serializer_class = ResidenceSerializer
    permission_classes = [ permissions.IsAuthenticated ]
    def get(self, request, *args, **kwargs):
        return Residence.objects.all()

class UpdateResidence(generics.GenericAPIView):
    serializer_class = ResidenceSerializer
    permission_classes = [ permissions.IsAuthenticated ]
    def get(self, request, *args, **kwargs):
        return Residence.objects.all()