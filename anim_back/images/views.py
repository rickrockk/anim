from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from .models import Image, User
from .serializers import ImageSerializer

class IsOwnerOrAdminOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        # Проверяем, является ли пользователь администратором
        if request.user.is_staff or request.user.is_superuser:
            return True

        # Проверяем, является ли пользователь владельцем объекта
        return obj.user == request.user and str(obj.id) == str(view.kwargs.get(view.lookup_field))

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    lookup_field = 'id'
    permission_classes = [permissions.IsAuthenticatedOrReadOnly] 

    def delete(self, request, *args, **kwargs):
        self.get_object()
        self.check_object_permissions(request, self.get_object()) 
        self.perform_destroy(self.get_object())  
        return Response(status=status.HTTP_204_NO_CONTENT)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user) 
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def get_permissions(self):
        if self.action == 'destroy':
            return [IsOwnerOrAdminOrReadOnly()]
        return super().get_permissions()

