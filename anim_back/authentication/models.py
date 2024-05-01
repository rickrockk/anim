from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from authentication.managers import UserManager


class User(AbstractBaseUser):
    email = models.EmailField(verbose_name='Email адрес', max_length=255, unique=True)
    first_name = models.CharField(verbose_name='Имя', max_length=255)
    last_name = models.CharField (verbose_name='Фамилия', max_length=255)

    is_active = models.BooleanField(verbose_name='',default=False)
    is_staff = models.BooleanField(verbose_name='',default=False)
    is_superuser = models.BooleanField(verbose_name='',default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name']

    objects = UserManager()

    def __str__(self):
        return self.email




    class Meta:
        verbose_name= 'Пользователь'
        verbose_name_plural= 'Пользователи'

