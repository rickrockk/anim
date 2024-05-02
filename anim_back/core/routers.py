from rest_framework.routers import DefaultRouter, SimpleRouter
from authentication.views import UserViewSet
from images.views import ImageViewSet

router = DefaultRouter()
simrouter = SimpleRouter()

router.register("user", UserViewSet)
simrouter.register("user",UserViewSet)
router.register("image", ImageViewSet)
simrouter.register("image",ImageViewSet)