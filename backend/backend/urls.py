from django.http import JsonResponse
from django.urls import path, include
from django.contrib import admin

def root_view(request):
    return JsonResponse({"message": "Django backend is running!"})

urlpatterns = [
    path('', root_view),  # 👈 Add this line
    path('admin/', admin.site.urls),
    path('api/', include('yourapp.urls')),  # if you have one
]
