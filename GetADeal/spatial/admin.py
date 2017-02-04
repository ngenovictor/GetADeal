from django.contrib import admin
from leaflet.admin import LeafletGeoAdmin
from .models import ShopBuildings, Points, MushroomSpot

# Register your models here.
admin.site.register(ShopBuildings,LeafletGeoAdmin)