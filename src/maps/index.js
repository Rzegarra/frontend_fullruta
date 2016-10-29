
var yo =require('yo-yo')

function renderMap(lat, long) {
  
  return yo`<div> 
  <script>
    var marker;

    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: ${lat}, lng: ${long}}
      });

      marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        icon: "markerVego40.png",
        position: {lat: ${lat}, lng: ${long}}
      });
      marker.addListener('click', toggleBounce);
    }

    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
  </script>
  <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAptzMvQRxOmkYKMYqW4G09vWd4Rhiy2Ps&signed_in=true&callback=initMap"></script>
  </div>`
}

module.exports = renderMap