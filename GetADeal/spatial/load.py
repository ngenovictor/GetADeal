import os
from django.contrib.gis.utils import LayerMapping
from models import Points

# Auto-generated `LayerMapping` dictionary for Points model
points_mapping = {
    'osm_id' : 'osm_id',
    'name' : 'name',
    'barrier' : 'barrier',
    'highway' : 'highway',
    'ref' : 'ref',
    'address' : 'address',
    'is_in' : 'is_in',
    'place' : 'place',
    'man_made' : 'man_made',
    'other_tags' : 'other_tags',
    'geom' : 'POINT',
}
mypoints_shp = os.path.abspath(os.path.join(os.path.dirname(__file__),
	'data/points.shp'))
def run (verbose=True):
	lm = LayerMapping(Points, mypoints_shp, points_mapping,transform=False,encoding='iso-8859-1')
	lm.save(strict=True, verbose=verbose)