
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
  
}
