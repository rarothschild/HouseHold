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
    streetAddress = models.CharField(max_length=255, default='')
    zipCode = models.IntegerField(null=True)
    city = models.CharField(max_length=255, default='')
    nickName = models.CharField(max_length=255, default='')
    propertyOwner = models.ManyToManyField(settings.AUTH_USER_MODEL,related_name='propertyOwner')
    tenants = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='tenants')
    canView = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='viewers', blank=False)
    utilities = models.ForeignKey(Utility, on_delete=models.CASCADE, null=True, blank=True)
    rent = models.IntegerField(null=True)
    def __str__(self):
        return self.streetAddress

