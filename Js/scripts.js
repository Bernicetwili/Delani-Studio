$(document).ready(function() {
  ;
});
$(document).ready(function() {
    $(".clickable").click(function() {
        $("#show").toggle();
        $("#hide").toggle();
    });
});
$(document).ready(function() {
    $(".clickable2").click(function() {
        $("#show2").toggle();
        $("#hide2").toggle();
    });
});
$(document).ready(function() {
    $(".clickable3").click(function() {
        $("#show3").toggle();
        $("#hide3").toggle();
    });
});
$(document).ready(function () {
    $("#my-form").submit(function (event) {
      event.preventDefault();
      var name = $("#name").val();
      let name = $("#name").val();
​
       if ($("#name").val()) {
        alert("Hey " + name + ",thank you for reaching out to us,We will get back to you");
        
        else {
        alert("Please provide your correct name and email!");
        }
  
    });
});
