localStorage.getItem('loged_member_icon')
document.getElementById("logo_member").src = "/images/" + localStorage.getItem("loged_member_icon")+ ".png";
console.log("ac1 is exist");

function redirectBack(){
    window.location.href="http://127.0.0.1:5500/mainpage";
}
function redirectAddSleep(){
    window.location.href="http://127.0.0.1:5500/sleep";
}
function redirectAddSmart(){
    window.location.href="http://127.0.0.1:5500/smart";
}
function redMenu(){
    window.location.href="http://127.0.0.1:5500/settings";}

function redSetting(){
        window.location.href="http://127.0.0.1:5500/membersettings";}

function backHome(){
            window.location.href="http://127.0.0.1:5500/mainpage";}
function redirectAbmelden(){
                window.location.href="http://127.0.0.1:5500/anmelden";}
function redirectChangeProfile(){
    window.location.href="http://127.0.0.1:5500/home";}