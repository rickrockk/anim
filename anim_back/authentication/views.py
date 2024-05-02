from rest_framework.viewsets import ModelViewSet
from authentication.serializers import UserSerializer
from authentication.models import User

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer