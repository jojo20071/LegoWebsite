function redirect(){
    window.location.href="http://127.0.0.1:5500/create";

}
function on(){
    window.open("http://192.168.178.25/relay/0?turn=toggle", 'location=yes,scrollbars=yes,status=yes');
    open("https://gogole.com");
    return false;
	console.log("on");
    
}

document.getElementById("info").innerHTML = localStorage.getItem('emailyy');;
anmelden();

function anmelden () {
    var myCorsApiKey = "6401fcccbc22d22cf7b25bb4";
    var data = null;
  
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
  
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          const resp = JSON.parse(this.responseText);
          const Resplength = resp.length;
          console.log(Resplength);
          var found = false;
          for (infoIndex = 0; infoIndex < Resplength; infoIndex++) {
            if (resp[infoIndex].email == localStorage.getItem('emailyy')){
              localStorage.setItem("UserData", JSON.stringify(resp[infoIndex]));
              found = true;
              console.log("richtige login infos");
              break;
            }
            }
          if (found == false) {
              alert("Falsche Login Daten");
          }
      }
    });
    xhr.open("GET", "https://dblego-97ac.restdb.io/rest/lego");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", myCorsApiKey);
    xhr.setRequestHeader("cache-control", "no-cache");
  
    xhr.send(data);
 
  }

