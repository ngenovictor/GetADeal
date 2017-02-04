from django.contrib.gis.db import models
 
class WayPoint(models.Model):
 
    name = models.CharField(max_length=32)
    geometry = models.PointField(srid=4326) #spatial reference
    objects = models.GeoManager() #every GIS-based django model needs one of these for geospatial queries
 
    def __unicode__(self):
        return '%s %s %s' % (self.name, self.geometry.x, self.geometry.y)

class Road(models.Model):
	name = models.CharField(max_length=32)
	geometry = models.LineStringField(srid=4326)
	objects = models.GeoManager()

	def __unicode__ (self):
		return self.name