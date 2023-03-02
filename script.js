//1.center the input fields
//2. Fonts
//3. Optional: put the register button on bottom -20px

function redirect(){
    window.location.href="http://127.0.0.1:5500/anmelden";
}
function redirect2(){
    window.location.href="http://127.0.0.1:5500/home";
}
function ty() {
  if (document.getElementById("input1").value == "" || document.getElementById("input2").value == "") {
    alert("Bitte füllen Sie alle Felder aus!");
  } else {
    check();
  }
}  
  

function registrieren () {
    var email = document.getElementById("input1").value;
    var password = document.getElementById("input2").value;
    console.log(email);
    console.log(password);
 
 
    var myCorsApiKey = "119f004d8ede59f884b15ab65d457f635bae0";
    var data = JSON.stringify({
     "email": email,
     "password": password
    });
 
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
 
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });
 
    xhr.open("POST", "https://www-legoleague-54c5.restdb.io/rest/user-info");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", myCorsApiKey);
    xhr.setRequestHeader("cache-control", "no-cache");
 
    xhr.send(data);

    
    setTimeout(redirect2, 1000);
 
    
 
    
 }

 function check () {
  var myCorsApiKey = "119f004d8ede59f884b15ab65d457f635bae0";
  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      const resp = JSON.parse(this.responseText);
      const Resplength = resp.length;
      var found = false;
      for (infoIndex = 0; infoIndex < Resplength; infoIndex++) {
        if (resp[infoIndex].email == document.getElementById("input1").value) {
          found = true;
          console.log("Emaiol wurde schon verwendet");
          alert("Email wurde schon verwendet, bitte melden sie sich an oder verwenden sie eine andere Email");
          break;
        }}
      if (found == false) {
        registrieren();
        console.log("penis");
      }



      console.log(resp);

    }
  });

  xhr.open("GET", "https://legoleague-54c5.restdb.io/rest/user-info");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", myCorsApiKey);
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);









}