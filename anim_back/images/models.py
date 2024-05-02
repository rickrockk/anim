from django.db import models

class Image(models.Model):
    name = models.CharField(verbose_name="название",max_length=255,default='SOME STRING')
    photo = models.ImageField(verbose_name='изображения',upload_to='images/photos')

    def __self__(self):
        return self.name
    
    class Meta:
        verbose_name='Фото'
        verbose_name_plural='Фото'