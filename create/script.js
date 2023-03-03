//document.getElementById("name").innerHTML = document.getElementById("input1").value;
//i have a text ith the id of "name" and i want to change the text to the value of the input with the id of "input1"

function changeText() {
    
    const name = document.getElementById("name");
    const input1 = document.getElementById("input1");
    if (input1.value == "") {
        name.textContent = "Please Enter a Name";
    }
    else {
    name.textContent = input1.value;}}