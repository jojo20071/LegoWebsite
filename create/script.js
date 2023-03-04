function changeText() {
    
    const name = document.getElementById("name");
    const input1 = document.getElementById("input1");
    if (input1.value == "") {
        name.textContent = "Bitte Name Eingeben";
    }
    else {
    name.textContent = input1.value;}}

$("input:checkbox").on('click', function() {
    var $box = $(this);
    console.log($box);
    checkedBox = $box.attr("id");
    document.getElementById("previewProfile").src = "/images/" + checkedBox + ".png";
    console.log("images/" + checkedBox + ".png");
    if ($box.is(":checked")) {
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", true);
    }
    console.log(checkedBox);
  });

function submit2() {
  if (typeof checkedBox == 'undefined') {
    alert("Bitte ein Profil auswählen");
  }

  memberId = Math.floor(Math.random() * 10000);
  console.log(memberId);
  console.log(localStorage.getItem('UserID'));
  if (localStorage.getItem('UserAc1') == "undefined") {
    updateMemberInfo1(memberId);
    postMemberInfo(checkedBox, document.getElementById("input1").value, memberId, localStorage.getItem('UserID'));
  }
  else {
    if(localStorage.getItem('UserAc2') == "undefined"){
      updateMemberInfo2(memberId);
      postMemberInfo(checkedBox, document.getElementById("input1").value, memberId, localStorage.getItem('UserID'));
    }
    else {
      if(localStorage.getItem('UserAc3') == "undefined"){
        updateMemberInfo3(memberId);
        postMemberInfo(checkedBox, document.getElementById("input1").value, memberId, localStorage.getItem('UserID'));
      }
      else {
        console.log("Keine Plätze mehr freiiiiiii");
        window.location.href="https://peaceful-lolly-588c32.netlify.app/home";
      }
    }}
    

  



    
}

function submit() {
  console.log(document.getElementById("input1").value);
  if (document.getElementById("input1").value == "") {
    alert("Bitte Name Angeben");
    }
  else { 
    console.log("not used");
    submit2()
    
  }

}


function updateMemberInfo1 (info) {
  var myCorsApiKey = "64033cccbc22d22cf7b25be5";
  var data = JSON.stringify({
    "ac1": info
  });
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
      localStorage.setItem("UserAc1", info);
      //window.location.href="http://127.0.0.1:5500/home";
    }
  });

  xhr.open("PATCH", "https://lego3-71bb.restdb.io/rest/lego/" + localStorage.getItem('UserID'));
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", myCorsApiKey);
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);
}
function updateMemberInfo2 (info) {
  var myCorsApiKey = "64033cccbc22d22cf7b25be5";
  var data = JSON.stringify({
    "ac2": info
  });
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
      //window.location.href="http://127.0.0.1:5500/home";
      localStorage.setItem("UserAc2", info);
    }
  });

  xhr.open("PATCH", "https://lego3-71bb.restdb.io/rest/lego/" + localStorage.getItem('UserID'));
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", myCorsApiKey);
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);
}
function updateMemberInfo3 (info) {
  var myCorsApiKey = "64033cccbc22d22cf7b25be5";
  var data = JSON.stringify({
    "ac3": info
  });
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
      //window.location.href="http://127.0.0.1:5500/home";
      localStorage.setItem("UserAc3", info);
    }
  });

  xhr.open("PATCH", "https://lego3-71bb.restdb.io/rest/lego/" + localStorage.getItem('UserID'));
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", myCorsApiKey);
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);
}


function postMemberInfo (image_id, name, member_id, profile_id) {
  console.log("updatingOnMemberInfo");
  var myCorsApiKey = "64033cccbc22d22cf7b25be5";
  var data = JSON.stringify({
    "image_id": image_id,
    "name": name,
    "member_id": member_id,
    "profile_id": profile_id
    

  });
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
      window.location.href="https://peaceful-lolly-588c32.netlify.app/home";
      
    }
  });

  xhr.open("POST", "https://lego3-71bb.restdb.io/rest/members");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", myCorsApiKey);
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);
}