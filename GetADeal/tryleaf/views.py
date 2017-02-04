from django.shortcuts import render, render_to_response
from django.template.loader import render_to_string
from django.http import HttpResponse
from django.contrib.gis.measure import D
from models import WayPoint, Road
import json
# Create your views here.

 
def index(request):
	'Display map'
	template = 'index.html'
	waypoints = WayPoint.objects.order_by('name')
	all_roads = Road.objects.order_by('name')
	roads = []
	for road in all_roads:
		obj = {
		'id':road.id,
		'name':road.name,
		'points':[],
		}
		for thing in road.geometry:
			obj['points'].append([thing[0], thing[1]])
		roads.append(obj)

	context = {
	'title':'Waypoints Tuitorial',
	'waypoints':waypoints,
	'roads':json.dumps(roads),
	'content': render_to_string('waypoints.html', {'waypoints': waypoints}),
	}
	return render_to_response(template, context)
 
def waypoints(request):
	if request.method == 'POST':
		data = request.POST.get('content')
		if data:
			data = json.loads(data)
			for wp_json in data:
				waypoint = WayPoint.objects.get(id=int(wp_json['id']))
				waypoint.geometry.set_x(float(wp_json['x']))
				waypoint.geometry.set_y(float(wp_json['y']))
				waypoint.save()
			return HttpResponse(json.dumps({'isOk':1}),mimetype='application/json')
		else:
			return HttpResponse(json.dumps({'isOk':0, 'message':'No data to save'}))
 
# def search(request):
# 	'To search waypoints'
# 	try:
# 		search_point = Point(float(request.GET.get('lng')),float(request.GET.get('lat')))
# 	except:
# 		return HttpResponse(json.dumps({
# 			'isOk':0,
# 			'message': 'Could not parse the search point',
# 			}))
# 	waypoints = WayPoint.objects.distance(search_point).order_by('distance')
# 	wayPointsByID = {}
# 	for wp in waypoints:
# 		wayPointsByID[wp.id] = {
# 		'name':wp.name,
# 		'lat':wp.geometry.y,
# 		'lng':wp.geometry.x,
# 		}
# 	return HttpResponse('Hello')
 
def search_near_roads(request):
	'search near roads'
	distance = float(request.GET.get('distance'))
	roads = Road.objects.all()
	point_ids = []
	for road in roads:
		points_nearby = WayPoint.objects.filter(geometry__distance_lte=(road.geometry, D(mi=distance)))
		point_ids.extend([point.id for point in points_nearby])
	return HttpResponse(json.dumps(point_ids))

# import json
# #...
# def waypoints(request):
#     if request.method == 'POST':
#         data = request.POST.get('content')
#         if data:
#             data = json.loads(data)
#             for wp_json in data:
#                 waypoint = WayPoint.objects.get(id=int(wp_json['id']))
#                 waypoint.geometry.set_x(float(wp_json['x']))
#                 waypoint.geometry.set_y(float(wp_json['y']))
#                 waypoint.save()
#             return HttpResponse(json.dumps({'isOk': 1}), mimetype='application/json')
#         else:
#             return HttpResponse(json.dumps({'isOk': 0, 'message': 'No data to save'}))