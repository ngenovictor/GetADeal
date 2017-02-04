var map = L.map('map', {
    center: [-1.2667, 36.8000],
    zoom: 6,
    minZoom:2,
    maxZoom:18,
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.light'
}).addTo(map);


// var mybuildings = eval('{{ buildings|safe }}');
// var mybuildingsByID = {};
// var numRoads = roads_.length;
// for(var i = 0; i < numRoads; i++){
//     var road = roads_[i];
//     roadsByID[road.id] = road;
//     var numPoints = road.points.length;
//     var latlngs = [];
//     for(var j = 0; j < numPoints; j++){
//         latlngs.push(new L.LatLng(road.points[j][1], road.points[j][0]));
//     }
//     road.polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
// }

L.geoJson(mybuildings).addTo(map);