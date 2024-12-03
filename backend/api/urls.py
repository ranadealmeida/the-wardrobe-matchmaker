from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClothingItemViewSet

router = DefaultRouter()
router.register(r'clothing-items', ClothingItemViewSet)  

urlpatterns = [
    path('', include(router.urls)),  
]

