function validateForm() {
    var x = document.forms["meeting"]["email"].value;
    var y = document.forms["meeting"]["number"].value;
    var z = document.forms["meeting"]["time"].value;
    if ( (x == "") || (y == "") || (z == "")) {
      alert("Neužpildėte laukelio");
      return false;
    }
  }
function initMap() {
    var uluru = { lat: -25.344, lng: 131.036 };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({ position: uluru, map: map });
  }
  