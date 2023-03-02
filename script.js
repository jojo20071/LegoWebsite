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
    registrieren();
  }
}  
  

function registrieren () {
    var email = document.getElementById("input1").value;
    var password = document.getElementById("input2").value;
    console.log(email);
    console.log(password);
 
 
    var myCorsApiKey = "8331064563d5e57c7c2b157d2061a03b325af";
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
 
    xhr.open("POST", "https://legoleague-54c5.restdb.io/rest/user-info");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", myCorsApiKey);
    xhr.setRequestHeader("cache-control", "no-cache");
 
    xhr.send(data);

    
    setTimeout(redirect2, 1000);
 
    
 
    
 }