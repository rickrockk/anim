from django.db import models
from authentication.models import User
from django.utils import timezone


class Image(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Пользователь', null=True)
    desc = models.CharField(verbose_name='Описание', max_length=255, default="SOME STRING");
    photo = models.ImageField(verbose_name='Изображение', upload_to='images/photos')

    def __str__(self):
        return self.desc;

    @property
    def user_first_name(self):
        return self.user.first_name if self.user else None

    class Meta:
        verbose_name = 'Фото'
        verbose_name_plural = 'Фото'
