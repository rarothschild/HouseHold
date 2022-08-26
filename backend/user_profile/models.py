from django.db import models
from django.contrib.auth.models import User
from residence.models import Residence

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255, default='')
    last_name = models.CharField(max_length=255, default='')
    residences = models.ForeignKey(Residence, on_delete=models.CASCADE,)

    def __str__(self):
        return self.first_name