from django.urls import re_path as url
from MarketplaceApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^item$',views.itemApi),
    url(r'^item/([0-9]+)$',views.itemApi),
    url(r'^item/saveImage',views.saveImage)
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)