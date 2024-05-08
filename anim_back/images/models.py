from django.db import models
from authentication.models import User
from django.utils import timezone


class Image(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Пользователь', null=True)
    photo = models.ImageField(verbose_name='Изображение', upload_to='images/photos')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Фото'
        verbose_name_plural = 'Фото'
