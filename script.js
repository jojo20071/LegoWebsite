//1.center the input fields
//2. Fonts
//3. Optional: put the register button on bottom -20px

function redirect(){
    window.location.href="https://peaceful-lolly-588c32.netlify.app/anmelden";
}
function redirect2(){
    window.location.href="https://peaceful-lolly-588c32.netlify.app/home";
}
function ty() {
  if (document.getElementById("input1").value == "" || document.getElementById("input2").value == "") {
    alert("Bitte füllen Sie alle Felder aus!");
  } else {
    check();
    console.log("not used");
  }
}  
  

function registrieren () {
    var email = document.getElementById("input1").value;
    var password = document.getElementById("input2").value;
    console.log(email);
    console.log(password);
 
 
    var myCorsApiKey = "64033cccbc22d22cf7b25be5";
    var data = JSON.stringify({
     "email": email,
     "password": password,
    });
 
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
 
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
        console.log("neue daten gesended");
        window.localStorage.clear();
        localStorage.setItem("emailyy", document.getElementById("input1").value);
        console.log("email set");
        setTimeout(redirect2, 100);
        
      }
    });
 
    xhr.open("POST", "https://lego3-71bb.restdb.io/rest/lego");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", myCorsApiKey);
    xhr.setRequestHeader("cache-control", "no-cache");
 
    xhr.send(data);
    

    
    
 
    
 
    
 }

 function check () {
  var myCorsApiKey = "64033cccbc22d22cf7b25be5";
  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      const resp = JSON.parse(this.responseText);
      console.log("got the info");
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
        console.log("noch nicht verwendet");
        registrieren();
        //localStorage.setItem("UserData", JSON.stringify(resp[resp.length]));
        console.log("got info");
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