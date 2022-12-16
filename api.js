function myfunction() {
  let x = prompt("What Do You Want?");

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      document.getElementById("img").src = data.amiibo[0].image;
    }
  };
  xhttp.open("GET", "https://www.amiiboapi.com/api/amiibo/?name=" + x, true);
  xhttp.send();

  // Get Name From The Api

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      document.getElementById("demo").innerHTML = data.amiibo[0].character;
    }
  };
  xhttp.open("GET", "https://www.amiiboapi.com/api/amiibo/?name=" + x, true);
  xhttp.send();

  // Get GAME From The Api

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      document.getElementById("game").innerHTML = data.amiibo[0].gameSeries;
    }
  };
  xhttp.open("GET", "https://www.amiiboapi.com/api/amiibo/?name=" + x, true);
  xhttp.send();
  // release date for amiibo
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      document.getElementById("na").innerHTML = data.amiibo[0].release.na;
    }
  };
  xhttp.open("GET", "https://www.amiiboapi.com/api/amiibo/?name=" + x, true);
  xhttp.send();
  //end of code
}

//theme
function Cyber() {
  document.documentElement.style.setProperty("--body-color", "#181C18");
  document.documentElement.style.setProperty("--color-text", "#886EC0");
}

function Cafe() {
  document.documentElement.style.setProperty("--body-color", "#CEB18D");
  document.documentElement.style.setProperty("--color-text", "#3B3329");
}

function JungleMint() {
  document.documentElement.style.setProperty("--body-color", "#1F4437");
  document.documentElement.style.setProperty("--color-text", "#D6686F");
}
function VsCode() {
  document.documentElement.style.setProperty("--body-color", "#1E1E1E");
  document.documentElement.style.setProperty("--color-text", "#007ACC");
}
function Matrix() {
  document.documentElement.style.setProperty("--body-color", "#000000");
  document.documentElement.style.setProperty("--color-text", "#15FF00");
}
function Orangeful() {
  document.documentElement.style.setProperty("--body-color", "#FF9869");
  document.documentElement.style.setProperty("--color-text", "#6A0DAD");
}
function def() {
  document.documentElement.style.setProperty("--body-color", "#1b1d36");
  document.documentElement.style.setProperty("--color-text", "#99d6ea");
}
function WateryOcean() {
  document.documentElement.style.setProperty("--body-color", "#DADBDC");
  document.documentElement.style.setProperty("--color-text", "#3C4AB2");
}
function Bricked() {
  document.documentElement.style.setProperty("--body-color", "#313131");
  document.documentElement.style.setProperty("--color-text", "#F66E0D");
}
function MintyGum() {
  document.documentElement.style.setProperty("--body-color", "#E4E4D4");
  document.documentElement.style.setProperty("--color-text", "#6B886B");
}
function GoldieHoney() {
  document.documentElement.style.setProperty("--body-color", "#F2AA00");
  document.documentElement.style.setProperty("--color-text", "#FFF546");
}
function GigaChad(){
  alert("Theme Failed To Load Please Try Again :(")
  location.replace("http://127.0.0.1:5500/testx.html")
}
