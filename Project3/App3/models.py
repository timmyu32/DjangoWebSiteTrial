from django.db import models

# Create your models here.

class UserData(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    location = models.CharField(max_length=50)

    