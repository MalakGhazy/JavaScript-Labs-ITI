document.addEventListener("DOMContentLoaded", function () {
    var textbox = document.getElementById("textbox");

    textbox.addEventListener("keydown", function (event) {
        alert("Key Code: " + event.keyCode);
    });
});