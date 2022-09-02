from django.db import models
from django.conf import settings
from residence.models import Residence

class UserProfile(models.Model):
    User = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    Alias = models.CharField(max_length=255, default='')
    Residences = models.ForeignKey(Residence, on_delete=models.CASCADE,)

    def __str__(self):
        return self.first_name