function redirect(){
  if(localStorage.getItem('UserAc3') == "undefined"){
    window.location.href="http://127.0.0.1:5500/create";
  }
    

}
function on(){
    window.open("http://192.168.178.25/relay/0?turn=toggle", 'location=yes,scrollbars=yes,status=yes');
    open("https://gogole.com");
    return false;
	console.log("on");
    
}

anmelden();
if (localStorage.getItem('ac1') == "undefined"){
  console.log("ac1 is exist");
  document.getElementById("hide1").style.left = "0px";
  document.getElementById("hide2").style.left = "0px";
}
    

function anmelden () {
    var myCorsApiKey = "64028499bc22d22cf7b25bcc";
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
              localStorage.setItem("UserID", resp[infoIndex]._id);
              localStorage.setItem("UserAc1", resp[infoIndex].ac1);
              localStorage.setItem("UserAc2", resp[infoIndex].ac2);
              localStorage.setItem("UserAc3", resp[infoIndex].ac3);
              
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
    xhr.open("GET", "https://lego2-4cbb.restdb.io/rest/lego");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", myCorsApiKey);
    xhr.setRequestHeader("cache-control", "no-cache");
  
    xhr.send(data);
 
  }

