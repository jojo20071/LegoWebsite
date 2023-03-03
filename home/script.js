function redirect(){
    window.location.href="http://127.0.0.1:5500/create";}
function on(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://192.168.178.23/relay/0?turn=toggle');
    xhr.send();
    window.location.href="http://192.168.178.23/relay/0?turn=toggle";
}