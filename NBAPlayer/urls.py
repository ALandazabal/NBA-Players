"""NBAPlayer URLs module"""

# Django
from django.contrib import admin
from django.urls import path

from NBAPlayer import views as local_view

urlpatterns = [
    path('admin/', admin.site.urls),

    path('/hello', local_view.hello_world, name='hello'),
    path('', local_view.players_list, name='players'),
]
