from django.db import models

# Create your models here.
class Items(models.Model):
    itemId = models.AutoField(primary_key=True)
    price = models.BigIntegerField()
    name = models.CharField(max_length=500)
    condition = models.CharField(max_length=50)
    ph = models.CharField(max_length=10)
    address = models.CharField(max_length=500)
    filename = models.CharField(max_length=50)