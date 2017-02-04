

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
L.geoJson(data).addTo(map);

// function map_init(map, options) {
// L.geoJson(productpoints, {
// 	onEachFeature: onEachFeature,
// 	style:myStyle,
// }).addTo(map);
// }
// function onEachFeature(feature, layer) {
// 	var popupContent = feature.properties.;
//       if (feature.properties && feature.properties.popupContent) {
//       	layer.bindPopup(feature.properties.popupContent);
//       }

//       layer.bindPopup(popupContent);
// }
// var myStyle = {
//     "color": "#ff7800",
//     "weight": 5,
//     "opacity": 0.65
// };
// L.geoJson([bicycleRental, campus], {

// 		style: function (feature) {
// 			return feature.properties && feature.properties.style;
// 		},

// 		onEachFeature: onEachFeature,

// 		pointToLayer: function (feature, latlng) {
// 			return L.circleMarker(latlng, {
// 				radius: 8,
// 				fillColor: "#ff7800",
// 				color: "#000",
// 				weight: 1,
// 				opacity: 1,
// 				fillOpacity: 0.8
// 			});
// 		}
// 	}).addTo(map)

// function onEachFeature(feature, layer) {
// 		var popupContent = "<p>I started out as a GeoJSON " +
// 				feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

// 		if (feature.properties && feature.properties.popupContent) {
// 			popupContent += feature.properties.popupContent;
// 		}

// 		layer.bindPopup(popupContent);
// 	}