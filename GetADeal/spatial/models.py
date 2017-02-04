from django.contrib.gis.db import models
from djgeojson.fields import PointField
from django.conf import settings
# Create your models here.
class MushroomSpot(models.Model):
    geom = models.PointField(srid=4326,null=True)
    description = models.TextField(null=True)
    picture = models.ImageField(upload_to='spatial', null=True)

    @property
    def popupContent(self):
        return '<img src="{}" /><p><{}</p>'.format(
            self.picture.url,
            self.description)


class Points(models.Model):
    pass

class Lines(models.Model):
    pass


class MultiLineStrings(models.Model):
    pass


class MultiPolygons(models.Model):
    pass


class Buildings(models.Model):
    osm_id = models.CharField(max_length=254,null=True)
    osm_way_id = models.CharField(max_length=254,null=True)
    name = models.CharField(max_length=254,null=True)
    type = models.CharField(max_length=254,null=True)
    aeroway = models.CharField(max_length=254,null=True)
    amenity = models.CharField(max_length=254,null=True)
    admin_leve = models.CharField(max_length=254,null=True)
    barrier = models.CharField(max_length=254,null=True)
    boundary = models.CharField(max_length=254,null=True)
    building = models.CharField(max_length=254,null=True)
    craft = models.CharField(max_length=254,null=True)
    geological = models.CharField(max_length=254,null=True)
    historic = models.CharField(max_length=254,null=True)
    land_area = models.CharField(max_length=254,null=True)
    landuse = models.CharField(max_length=254,null=True)
    leisure = models.CharField(max_length=254,null=True)
    man_made = models.CharField(max_length=254,null=True)
    military = models.CharField(max_length=254,null=True)
    natural = models.CharField(max_length=254,null=True)
    office = models.CharField(max_length=254,null=True)
    place = models.CharField(max_length=254,null=True)
    shop = models.CharField(max_length=254,null=True)
    sport = models.CharField(max_length=254,null=True)
    tourism = models.CharField(max_length=254,null=True)
    other_tags = models.CharField(max_length=254,null=True)
    geom = models.PolygonField(srid=4326,null=True)
    picture = models.ImageField(upload_to='spatial/buildings',null=True)
    objects = models.GeoManager()
    
    def __unicode__(self):
        return self.name

class ShopBuildings(models.Model):
    name = models.CharField(max_length=254,null=True)
    town = models.CharField(max_length=50,null=True)
    type = models.CharField(max_length=254,null=True)
    picture = models.ImageField(upload_to='spatial/shopbuildings',null=True)
    geom = models.PolygonField(srid=4326,null=True)
    objects = models.GeoManager()
    
    def __unicode__(self):
        return self.name



