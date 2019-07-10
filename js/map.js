/*var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 27.510110, lng: -99.508581},
          zoom: 15
        });
      } */


function initMap() {
  // The location of VSTN
  var volunteers = {lat: 27.510110, lng: -99.508581};
  // The map, centered at VSTN
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 18, center: volunteers});
  // The marker, positioned at Uluru
  //var marker = new google.maps.Marker({position: volunteers, map: map});
  var marker = new google.maps.Marker({
  position: volunteers,
  animation:google.maps.Animation.BOUNCE
});

marker.setMap(map);
}
