var osmlayer =  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets'
});

var mapboxstreets =  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets'
});

var streets_satellite =  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets-satellite'
});

var mapboxdark =  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.dark'
});

var map = L.map('map', {
    center: [-0.282440829745662, 36.075083608374314],
    zoom: 15,
    minZoom:2,
    maxZoom:18,
    layers:[osmlayer]
});
//This is the base layer
//Add my own key
//Give the option of two layers or more to chose from
var baseMaps = {
	"Open Street Map":osmlayer,
    "Satellite Streets": streets_satellite,
    "Mapbox Streets":mapboxstreets,
    "Mapbox Dark":mapboxdark
};




var shopIcon = L.icon({
    iconUrl: iconurl,
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

function onEachFeature(feature, layer) {
	

	if (feature.properties && feature.properties.popupContent) {
		popupContent += feature.properties.popupContent;
	}

	layer.bindPopup(popupContent);
}
var shopsmap = L.geoJson(myshops, {
	onEachFeature:function(feature,layer){
		var popupContent = "<p>" +
			feature.properties.name_of_shop +"<br>" + 
			"P.O. Box " + feature.properties.address + "<br>" + 
			"Tel." + feature.properties.tel_no + "<br>" +
			"Building" + feature.properties.building + "<br>" +
			"Room No." + feature.properties.room_no + "<br>" +
			"</p>";
		if (feature.properties && feature.properties.popupContent){
			popupContent += feature.properties.popupContent;
		}
		layer.bindPopup(popupContent);

	},

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {icon:shopIcon});
	}
}).addTo(map);

var buildingmap = L.geoJson(mybuildings,{
	onEachFeature:function(feature,layer){
		var popupContent= feature.properties.name;
		if(feature.properties && feature.properties.popupContent){
			popupContent += feature.properties.popupContent;
		}
		layer.bindPopup(popupContent);
	},
	style:function(feature){
		return{
			color:'#0000ff',
			fillColor:'#0000ff',
			weight:1
		}
	}

}).addTo(map);

var overlayMaps = {
    "Shop Layer  <img style='height:20px;width:20px;' src='static/image/shop-icon.png'>": shopsmap,
    "buildingmap":buildingmap
};
L.control.layers(baseMaps, overlayMaps).addTo(map);

L.Routing.control({
  waypoints: [
    L.latLng(57.74, 11.94),
    L.latLng(57.6792, 11.949)
  ]
}).addTo(map);
