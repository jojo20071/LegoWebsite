window.localStorage.removeItem('name');
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

function showProfiles(){
if (localStorage.getItem('UserAc1') == "undefined"){
  console.log("ac1 is NOT exist");
}
else{
  document.getElementById("hide1").style.backgroundColor = "#3078BA";
  document.getElementById("hide2").style.left = "5px";
  document.getElementById("hide3").style.left = "100px";

  document.getElementById("hide2").src = "/images/" + localStorage.getItem("image_id member 1")+ ".png";
  document.getElementById("hide3").innerHTML = localStorage.getItem("name member 1");

  console.log("ac1 is exist");
  if (localStorage.getItem('UserAc2') == "undefined"){
    console.log("ac2 is NOT exist");
  }
  else{
    document.getElementById("hide4").style.backgroundColor = "#3078BA";
    document.getElementById("hide5").style.left = "5px";
    document.getElementById("hide6").style.left = "100px";

    document.getElementById("hide5").src = "/images/" + localStorage.getItem("image_id member 2")+ ".png";
    document.getElementById("hide6").innerHTML = localStorage.getItem("name member 2");

    console.log("ac2 is exist");
      if (localStorage.getItem('UserAc3') == "undefined"){
        console.log("ac3 is NOT exist");
      }
      else{
        document.getElementById("hide7").style.backgroundColor = "#3078BA";
        document.getElementById("hide8").style.left = "5px";
        document.getElementById("hide9").style.left = "100px";

        document.getElementById("hide8").src = "/images/" + localStorage.getItem("image_id member 3")+ ".png";
        document.getElementById("hide9").innerHTML = localStorage.getItem("name member 3");

        console.log("ac3 is exist");
      }

}}}
    

function anmelden () {
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
            if (resp[infoIndex].email == localStorage.getItem('emailyy')){
              localStorage.setItem("UserID", resp[infoIndex]._id);
              localStorage.setItem("UserAc1", resp[infoIndex].ac1);
              localStorage.setItem("UserAc2", resp[infoIndex].ac2);
              localStorage.setItem("UserAc3", resp[infoIndex].ac3);
              if (typeof resp[infoIndex].ac1 != "undefined"){
                getMemberInfo (resp[infoIndex].ac1,1);
              }
              if (typeof resp[infoIndex].ac2 != "undefined"){
                getMemberInfo (resp[infoIndex].ac2,2);
              }
              if (typeof resp[infoIndex].ac3 != "undefined"){
                getMemberInfo (resp[infoIndex].ac3,3);
              }

              
              found = true;
              console.log("richtige login infos");
              showProfiles()
              break;
            }
            }
          if (found == false) {
              alert("Falsche Login Daten");
          }
      }
    });
    xhr.open("GET", "https://lego3-71bb.restdb.io/rest/lego");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", myCorsApiKey);
    xhr.setRequestHeader("cache-control", "no-cache");
  
    xhr.send(data);
 
  }


  function getMemberInfo (member_id_search,member_number) {
    var myCorsApiKey = "64033cccbc22d22cf7b25be5";
    var data = null;
  
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
  
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          const resp = JSON.parse(this.responseText);
          const Resplength = resp.length;
          var found = false;
          for (infoIndex = 0; infoIndex < Resplength; infoIndex++) {
            if (resp[infoIndex].member_id == member_id_search){
              localStorage.setItem("id member "+member_number, resp[infoIndex]._id);
              localStorage.setItem("image_id member "+member_number, resp[infoIndex].image_id);
              localStorage.setItem("name member "+member_number, resp[infoIndex].name);
              console.log("member "+member_number+" gefunden");
              found = true;
              showProfiles()
              
              break;
            }
            }
          if (found == false) {
              //alert("Falsche member Daten");
          }
      }
    });
    xhr.open("GET", "https://lego3-71bb.restdb.io/rest/members");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", myCorsApiKey);
    xhr.setRequestHeader("cache-control", "no-cache");
  
    xhr.send(data);
 
  }

function log1(){
  console.log("log1");
  localStorage.setItem('loged_member', localStorage.getItem("id member 1"));
  localStorage.setItem('loged_member_icon', localStorage.getItem("image_id member 1"));
  localStorage.setItem('loged_member_name', localStorage.getItem("name member 1"));
  window.location.href="http://127.0.0.1:5500/mainpage";

  }
function log2(){
  console.log("log2");
  localStorage.setItem('loged_member', localStorage.getItem("id member 2"));
  localStorage.setItem('loged_member_icon', localStorage.getItem("image_id member 2"));
  localStorage.setItem('loged_member_name', localStorage.getItem("name member 2"));
  window.location.href="http://127.0.0.1:5500/mainpage";}
function log3(){
  console.log("log3");
  localStorage.setItem('loged_member', localStorage.getItem("id member 3"));
  localStorage.setItem('loged_member_icon', localStorage.getItem("image_id member 3"));
  localStorage.setItem('loged_member_name', localStorage.getItem("name member 3"));
  window.location.href="http://127.0.0.1:5500/mainpage";}


