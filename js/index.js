$(document).ready(function () {

  var map = new GMaps({
    div: '#map',
    zoom: 16,
    lat: -12.043333,
    lng: -77.028333,
    click: function(e) {
      alert('click');
    },
    dragend: function(e) {
      alert('dragend');
    }
  });

  GMaps.geolocate({
    success: function(position) {
      map.setCenter(position.coords.latitude, position.coords.longitude);
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
