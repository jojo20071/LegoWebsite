//1.center the input fields
//2. Fonts
//3. Optional: put the register button on bottom -20px

function redirect(){
    window.location.href="http://127.0.0.1:5500/home";
}
function redirect2(){
  window.location.href="http://127.0.0.1:5500";
}




 function anmelden () {
  console.log("anmelden");
  var myCorsApiKey = "64033cccbc22d22cf7b25be5";
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
          if (resp[infoIndex].email == document.getElementById("input1").value && resp[infoIndex].password == document.getElementById("input2").value) {
            found = true;
            console.log("richtige login infos");
            window.localStorage.clear();
            localStorage.setItem("emailyy", document.getElementById("input1").value);
            setTimeout(redirect, 1000);
            break;
          }
          }
        if (found == false) {
            alert("Falsche Login Daten");
        }
    
        
      
      console.log(resp);
     
    }
  });

  xhr.open("GET", "https://lego3-71bb.restdb.io/rest/lego");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", myCorsApiKey);
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);
  


  
  

  

  
}