from django.db import models

class Residence(models.Model):
    address = models.CharField(max_length=255, default='')
    
    def __str__(self):
        return self.address