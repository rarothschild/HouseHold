from django.conf import settings
from rest_framework import generics, permissions, serializers, status
from rest_framework.response import Response

from .models import Residence
from .serializers import ResidenceSerializer
from account.models import User

# TODO
# - GetResidence
# - RemoveResidence
# - AddTenant
# - UpdateResidence

class GetResidence(generics.GenericAPIView):
    serializer_class = ResidenceSerializer
    permission_classes = [ permissions.IsAuthenticated ]
    def get(self, request, *args, **kwargs):
        return Residence.objects.all()

class GetAllResidenceList(generics.GenericAPIView):
    serializer_class = ResidenceSerializer
    permission_classes = [ permissions.IsAdminUser ]
    def get(self, request, *args, **kwargs):
        res = Residence.objects.all()
        serializer = self.get_serializer(res, many=True)
        return Response(serializer.data)

class GetUserResidenceList(generics.GenericAPIView):
    serializer_class = ResidenceSerializer
    permission_classes = [ permissions.IsAuthenticated ]
    def get(self, request, *args, **kwargs):
        res = Residence.objects.filter(canView=request.user)
        serializer = self.get_serializer(res, many=True)
        return Response(serializer.data)

class AddResidence(generics.GenericAPIView):
    serializer_class = ResidenceSerializer
    permission_classes = (permissions.IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        print(serializer.validated_data)
        residence = serializer.save(canView=User.objects.filter(pk=request.user.id))
        return Response({'residence creation': 'successful!'},status=status.HTTP_201_CREATED)

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