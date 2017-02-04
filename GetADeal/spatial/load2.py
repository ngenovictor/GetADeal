import os
from django.contrib.gis.utils import LayerMapping
from models import Lines, MultiLineStrings, MultiPolygons

lines_mapping = {
    'osm_id' : 'osm_id',
    'name' : 'name',
    'highway' : 'highway',
    'waterway' : 'waterway',
    'aerialway' : 'aerialway',
    'barrier' : 'barrier',
    'man_made' : 'man_made',
    'other_tags' : 'other_tags',
    'geom' : 'LINESTRING',
}

myline_shp = os.path.abspath(os.path.join(os.path.dirname(__file__),
	'data/lines.shp'))

def run (verbose=True):	
	lm = LayerMapping(Lines, myline_shp,lines_mapping,transform=False,encoding='iso-8859-1')
	lm.save(strict=True, verbose=verbose)
	