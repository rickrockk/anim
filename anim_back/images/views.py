from rest_framework.viewsets import ModelViewSet
from images.serializers import ImageSerializer
from images.models import Image

class ImageViewSet(ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer