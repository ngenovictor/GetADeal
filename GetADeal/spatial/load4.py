import os
from django.contrib.gis.utils import LayerMapping
from models import Lines, MultiLineStrings, MultiPolygons

multipolygons_mapping = {
    'osm_id' : 'osm_id',
    'osm_way_id' : 'osm_way_id',
    'name' : 'name',
    'type' : 'type',
    'aeroway' : 'aeroway',
    'amenity' : 'amenity',
    'admin_leve' : 'admin_leve',
    'barrier' : 'barrier',
    'boundary' : 'boundary',
    'building' : 'building',
    'craft' : 'craft',
    'geological' : 'geological',
    'historic' : 'historic',
    'land_area' : 'land_area',
    'landuse' : 'landuse',
    'leisure' : 'leisure',
    'man_made' : 'man_made',
    'military' : 'military',
    'natural' : 'natural',
    'office' : 'office',
    'place' : 'place',
    'shop' : 'shop',
    'sport' : 'sport',
    'tourism' : 'tourism',
    'other_tags' : 'other_tags',
    'geom' : 'POLYGON',
}
mymultipolygons_shp = os.path.abspath(os.path.join(os.path.dirname(__file__),
	'data/multipolygons.shp'))

def run (verbose=True):
	lm = LayerMapping(MultiPolygons, mymultipolygons_shp, multipolygons_mapping,transform=False,encoding='iso-8859-1')
	lm.save(strict=True, verbose=verbose)