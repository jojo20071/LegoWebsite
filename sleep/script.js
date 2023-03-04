localStorage.getItem('loged_member_icon')
document.getElementById("logo_member").src = "/images/" + localStorage.getItem("loged_member_icon")+ ".png";
console.log("ac1 is exist");

function redirectBack(){
    window.location.href="https://ses-smartenergysave.netlify.app/mettings";
}
function redirectAddSleep(){
    window.location.href="https://ses-smartenergysave.netlify.app/sleep";
}
function redirectAddSmart(){
    window.location.href="https://ses-smartenergysave.netlify.app/smart";
}
function remove(){
    document.getElementById("gerät1").style.display = "none";
    document.getElementById("shift3").innerHTML = "Keine Geräte gefunden";
    console.log("gerät1 is removed");
}
function redMenu(){
    window.location.href="https://ses-smartenergysave.netlify.app/settings";}

function redSetting(){
        window.location.href="https://ses-smartenergysave.netlify.app/membersettings";}
        function backHome(){
            window.location.href="https://ses-smartenergysave.netlify.app/mainpage";}