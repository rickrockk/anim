from rest_framework.routers import DefaultRouter
from authentication.views import UserViewSet
from images.views import ImageViewSet

router = DefaultRouter()

router.register("user", UserViewSet)
router.register("image", ImageViewSet)