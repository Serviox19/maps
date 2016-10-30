$(document).ready(function () {

  var lat;
  var lon;

  var map = new GMaps({
    div: '#map',
    zoom: 12,
    lat: 40.7562,
    lng: -73.9868,
    click: function(e) {
      alert('click');
    },
    dragend: function(e) {
      console.log('dragged');
    }
  });

  $('#getLocation').click(function() {

    GMaps.geolocate({
      success: function(position) {
        map.setCenter(position.coords.latitude, position.coords.longitude);
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
      },
      error: function(error) {
        alert('Geolocation failed: '+error.message);
      },
      not_supported: function() {
        alert("Your browser does not support geolocation");
      },
      always: function() {
        console.log("Done!");
      }
    });

  });
});
