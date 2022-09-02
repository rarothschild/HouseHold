from django.db import models
from django.contrib.auth import get_user_model

class Utility(models.Model):
    utilityType = models.CharField(max_length=20)
    company = models.CharField(max_length=20)
    primaryContact = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    payDate = models.DateField()
    accountNumber = models.IntegerField()
    accountUsername = models.CharField(max_length=20)
    accountPassword = models.CharField(max_length=20)

class Residence(models.Model):
    address = models.CharField(max_length=255, default='')
    nickName = models.CharField(max_length=255, default='')
    utilities = models.ForeignKey(Utility, on_delete=models.CASCADE)
    rent = models.IntegerField()
    def __str__(self):
        return self.address

