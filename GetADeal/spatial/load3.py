import os
from django.contrib.gis.utils import LayerMapping
from models import Lines,  MultiLineStrings, MultiPolygons

multilinestrings_mapping = {
    'osm_id' : 'osm_id',
    'name' : 'name',
    'type' : 'type',
    'other_tags' : 'other_tags',
    'geom' : 'LINESTRING',
}
mymultilinestrings_shp = os.path.abspath(os.path.join(os.path.dirname(__file__),
	'data/multilinestrings.shp'))

def run (verbose=True):
	lm = LayerMapping( MultiLineStrings, mymultilinestrings_shp, multilinestrings_mapping,transform=False,encoding='iso-8859-1')
	lm.save(strict=True, verbose=verbose)