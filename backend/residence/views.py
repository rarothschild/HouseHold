from django.shortcuts import render
from rest_framework import generics, permissions, serializers
from rest_framework.response import Response

from residence.models import Residence

# Create your views here.
class GetResidenceList(generics.GenericAPIView):
    serializer_class = GetResidenceSerializer
    permission_classes = [ permissions.IsAuthenticated ]
    def get(self, request, *args, **kwargs):
        return Residence.objects.all()