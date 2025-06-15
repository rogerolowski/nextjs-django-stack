from django.urls import path
from .views import HelloWorldView

urlpatterns = [
    path('hello/', HelloWorldView.as_view(), name='hello'),
    path('hello', HelloWorldView.as_view()),  # no-slash version to avoid 301 redirect
]
