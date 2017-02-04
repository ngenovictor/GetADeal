from models import WayPoint, Road
from django.contrib.gis import admin
# Register your models here.
 
admin.site.register(WayPoint, admin.OSMGeoAdmin)
admin.site.register(Road, admin.OSMGeoAdmin)
