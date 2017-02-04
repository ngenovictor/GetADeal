
function onEachFeature(feature, layer) {
            var popupContent = "<p>"+  feature.geometry.type +"</p>";

      if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.popupContent;
      }

      layer.bindPopup(popupContent);
}
function map_init(map, options) {
      L.geoJson(collection, {onEachFeature: onEachFeature}).addTo(map);
}
L.marker([51.5, -0.09]).addTo(map)
      .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

var popup = L.popup();

function onMapClick(e) {
      popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
}

map.on('click', onMapClick);

