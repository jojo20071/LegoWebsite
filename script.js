//1.center the input fields
//2. Fonts
//3. Optional: put the register button on bottom -20px

function redirect(){
    window.location.href="http://127.0.0.1:5500/anmelden";
}

function registrieren () {
    var email = document.getElementById("input1").value;
    var password = document.getElementById("input2").value;
    console.log(password);
    console.log(email);
 
 
    var myCorsApiKey = "05df23edee638c40eb918e8bad12d3ca85948";
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
 
    
 
    
 }