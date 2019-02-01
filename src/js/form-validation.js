function validateForm() {
    var x = document.forms["meeting"]["email"].value;
    var y = document.forms["meeting"]["number"].value;
    var z = document.forms["meeting"]["time"].value;
    if ( (x == "") || (y == "") || (z == "")) {
      alert("Neužpildėte laukelio");
      return false;
    }
  }