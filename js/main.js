let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("google-map"), {
    center: { lat: 47.925476, lng: 106.902479 },
    zoom: 16,
  });

  const marker = new google.maps.Marker({
    position: { lat: 47.925476, lng: 106.902479 },
    map: map,
  });
}