let checkedBox = null;
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
    checkedBox = $box.attr("id");
    if ($box.is(":checked")) {
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
    console.log(checkedBox);
  });


function submit() {
  console.log(document.getElementById("input1").value);
  console.log(checkedBox);
  if (document.getElementById("input1").value == ""|| checkedBox == null) {
    alert("Bitte Name und Foto Angeben");
    } }