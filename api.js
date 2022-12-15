
function myfunction(){
  let x = prompt("What Do You Want?")

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      document.getElementById("img").src = data.amiibo[0].image;
    }
  };
  xhttp.open(
    "GET",
    "https://www.amiiboapi.com/api/amiibo/?name="+ x ,
    true
  );
  xhttp.send();

  // Get Name From The Api

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      document.getElementById("demo").innerHTML = data.amiibo[0].character;
    }
  };
  xhttp.open(
    "GET",
    "https://www.amiiboapi.com/api/amiibo/?name="+ x ,
    true
  );
  xhttp.send();

// Get GAME From The Api

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      document.getElementById("game").innerHTML = data.amiibo[0].gameSeries;
    }
  };
  xhttp.open(
    "GET",
    "https://www.amiiboapi.com/api/amiibo/?name="+ x ,
    true
  );
  xhttp.send();
  // release date for amiibo
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      document.getElementById("na").innerHTML = data.amiibo[0].release.na;
    }
  };
  xhttp.open(
    "GET",
    "https://www.amiiboapi.com/api/amiibo/?name="+ x ,
    true
  );
  xhttp.send();
}
