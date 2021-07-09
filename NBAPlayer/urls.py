"""NBAPlayer URLs module"""

# Django
from django.contrib import admin
from django.urls import path

from django.conf import settings
from django.conf.urls.static import static

from NBAPlayer import views as local_view

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', local_view.players_list, name='players'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
