function initMap() {
  var uluru = {lat: 34.8958, lng: -117.0173};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
