from residence.views import GetResidenceList, AddResidence, AddTenant, GetResidence, RemoveResidence, UpdateResidence
from django.urls import path

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('list/', GetResidenceList.as_view(), name='listResidence'),
    path('get/', GetResidence.as_view(), name='getResidence'),
    path('add/', AddResidence.as_view(), name='addResidence'),
    path('remove/', RemoveResidence.as_view(), name='removeResidence'),
    path('update/', UpdateResidence.as_view(), name='updateResidence'),
    path('addTenant/', AddTenant.as_view(), name='addTenant'),
]

