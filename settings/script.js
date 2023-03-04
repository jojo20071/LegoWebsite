localStorage.getItem('loged_member_icon')
document.getElementById("logo_member").src = "/images/" + localStorage.getItem("loged_member_icon")+ ".png";
console.log("ac1 is exist");

function redirectBack(){
    window.location.href="https://ses-smartenergysave.netlify.app/mainpage";
}
function redirectAddSleep(){
    window.location.href="https://ses-smartenergysave.netlify.app/sleep";
}
function redirectAddSmart(){
    window.location.href="https://ses-smartenergysave.netlify.app/smart";
}
function redMenu(){
    window.location.href="https://ses-smartenergysave.netlify.app/settings";}

function redSetting(){
        window.location.href="https://ses-smartenergysave.netlify.app/membersettings";}

function backHome(){
            window.location.href="https://ses-smartenergysave.netlify.app/mainpage";}