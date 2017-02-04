"""GetADeal URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from djgeojson.views import GeoJSONLayerView
from application.views import *
from spatial.views import *
from application.models import Product

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', home, name='home'),
    url(r'^about/$', about, name='about'),
    url(r'^contact/$', contact,name='contact'),
    url(r'^search/$', search, name="search"),
    url(r'^accounts/profile/$', home),
    url(r'^accounts/profile/(?P<user_name>[\w-]+)/$', profile, name='profile'),
    # url(r'^accounts/profile/$', 'application.views.redirectprofile', name='redirectprofile'),
    url(r'^accounts/', include('registration.backends.default.urls')),
    url(r'^createshop$', createshop, name='createshop'),
    url(r'^createproduct$', createproduct, name='createproduct'),
    url(r'^productmap$', productmap, name='productmap'),
    url(r'^shopmap$', shopmap, name='shopmap'),
    url(r'^product/(?P<product_id>[\w-]+)/$', product,name='product'),
    url(r'^shop/(?P<shop_id>[\w-]+)/$',shop, name='shop'),
    url(r'^directions',directions,name='directions'),
    url(r'^try/', include('tryleaf.urls')),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_URL)