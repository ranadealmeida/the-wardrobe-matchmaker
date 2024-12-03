from django.db import models


class ClothingItem(models.Model):
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=50)
    style = models.CharField(max_length=50)
    image = models.URLField()

    def __str__(self):
        return self.name
