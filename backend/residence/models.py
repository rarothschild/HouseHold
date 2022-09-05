from django.db import models
from django.conf import settings


class Utility(models.Model):
    utilityType = models.CharField(max_length=20)
    company = models.CharField(max_length=20)
    primaryContact = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    payDate = models.DateField()
    accountNumber = models.IntegerField()
    accountUsername = models.CharField(max_length=20)
    accountPassword = models.CharField(max_length=20)
    

class Residence(models.Model):
    address = models.CharField(max_length=255, default='')
    nickName = models.CharField(max_length=255, default='')
    tenants = models.ManyToManyField(settings.AUTH_USER_MODEL)
    utilities = models.ForeignKey(Utility, on_delete=models.CASCADE)
    rent = models.IntegerField()
    def __str__(self):
        return self.address

