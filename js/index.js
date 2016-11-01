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
        setTimeout(function () {
          map.addMarker({
            lat: lat,
            lng: lon,
            title: 'Your Location',
            infoWindow: {
              content: '<p>Your Location</p>'
            },
            click: function(e) {
              console.log('Your Location');
            }
          });
        }, 1400);
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

  $('.controls').keypress(function (e) {
    if (e.which == 13) {
      GMaps.geocode({
        address: $('#search').val(),
        callback: function(results, status) {
          console.log(results);
          if (status == 'OK') {
            var position = results[0].geometry.location;
            map.setCenter(position.lat(), position.lng());
            map.addMarker({
              lat: position.lat(),
              lng: position.lng(),
              title: 'Search Location',
              infoWindow: {
                content: '<p>'+ results[0].formatted_address +'</p>'
              },
              click: function(e) {
                console.log('hit');
              }
            });
            $('#search').val('');
          }
        }
      });
    }// End If
  });
});//End Code
