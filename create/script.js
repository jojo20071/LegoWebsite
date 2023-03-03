//document.getElementById("name").innerHTML = document.getElementById("input1").value;
//i have a text ith the id of "name" and i want to change the text to the value of the input with the id of "input1"

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
    if ($box.is(":checked")) {
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });