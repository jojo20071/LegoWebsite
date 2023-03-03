function check () {
    var myCorsApiKey = "6401fcccbc22d22cf7b25bb4";
    var data = null;
  
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
  
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
  
      }
    });
  
    xhr.open("GET", "https://dblego-97ac.restdb.io/rest/lego");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", myCorsApiKey);
    xhr.setRequestHeader("cache-control", "no-cache");
  
    xhr.send(data);


  }

check();
function check2() {
    var myCorsApiKey1 = "05df23edee638c40eb918e8bad12d3ca85948";
    var data = JSON.stringify({
        "email": "lololo",
        "password": "noice"
       });
 
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
 
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });
 
    xhr.open("POST", "https://weatherext-ee0a.restdb.io/rest/googlelogin");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", myCorsApiKey1);
    xhr.setRequestHeader("cache-control", "no-cache");
 
    xhr.send(data);
  }
