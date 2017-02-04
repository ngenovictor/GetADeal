from django.conf.urls import *
from tryleaf.views import *

 
urlpatterns = [
    #map
    url(r'^$', index, name='waypoints-index'),
 
    #get,save waypoints
    url(r'^waypoints$', waypoints, name='waypoints'),
 
    #search waypoints
    # url(r'^search$', search, name='search'),
 
    #search waypoints roads
    url(r'^search-near-roads$', search_near_roads, name='search-near-roads'),
]

