from django.contrib import admin
from django.contrib.gis import admin as gisadmin
from .models import *
admin.site.register(UserDetail)
admin.site.register(Product)

admin.site.register(Category)
admin.site.register(ContactMessage) 
gisadmin.site.register(Shops, gisadmin.OSMGeoAdmin)