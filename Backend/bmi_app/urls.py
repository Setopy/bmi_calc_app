from django.urls import path
from .views import BMIView

urlpatterns = [
    path('bmi/', BMIView.as_view()),
]
