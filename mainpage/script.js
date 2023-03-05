localStorage.getItem('loged_member_icon')
document.getElementById("logo_member").src = "/images/" + localStorage.getItem("loged_member_icon")+ ".png";
console.log("ac1 is exist");

var state1 = false;
var state2 = false;



function changeColor() {
    if (state1 == false) {
        document.getElementById("gerät1").style.backgroundColor = "#3078BA";
        document.getElementById("k1").style.marginLeft = "30px";
        state1 = true;
        location.assign("http://192.168.178.23/relay/0?turn=toggle");
        //run code after 1 sekond




    } else {
        document.getElementById("gerät1").style.backgroundColor = "#21364A";
        document.getElementById("k1").style.marginLeft = "3px";
        state1 = false;
        location.assign("http://192.168.178.23/relay/0?turn=toggle");
    }
    

}

function changeColor2() {
    if (state2 == false) {
        document.getElementById("gerät2").style.backgroundColor = "#3078BA";
        document.getElementById("k2").style.marginLeft = "30px";
        state2 = true;
        location.assign("http://192.168.178.25/relay/0?turn=toggle");
    } else {
        document.getElementById("gerät2").style.backgroundColor = "#21364A";
        document.getElementById("k2").style.marginLeft = "3px";
        state2 = false;
        location.assign("http://192.168.178.25/relay/0?turn=toggle");
    }
    

}


function redMenu(){
    window.location.href="https://ses-smartenergysave.netlify.app/settings";}

function redSetting(){
        window.location.href="https://ses-smartenergysave.netlify.app/membersettings";}
function backHome(){
        window.location.href="https://ses-smartenergysave.netlify.app/mainpage";}