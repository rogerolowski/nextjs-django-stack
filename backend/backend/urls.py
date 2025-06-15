from django.http import JsonResponse
from django.urls import path, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)

def root_view(request):
    return JsonResponse({"message": "Django backend is running!"})

def health_check(request):
    from django.http import HttpResponse
    return HttpResponse("OK", status=200)

urlpatterns = [
    path('health/', health_check),  # Health check endpoint
    path('health', health_check),   # Health check endpoint (no slash)
    path('', root_view),  # Root health check
    path('test-json/', lambda request: JsonResponse({"test": True})),  # JSON response test
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),  # API routes
    path('api/auth/', include('backend.jwt_urls')),  # JWT auth endpoints
    path('__debug__/', include('debug_toolbar.urls')),  # Django Debug Toolbar
    # API Documentation
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
