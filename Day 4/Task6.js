document.addEventListener("DOMContentLoaded", function () {
    var numberInput = document.getElementById("numberInput");

    // Add event listener for keypress
    numberInput.addEventListener("keydown", function (event) {
        // Allow only numeric keys (0-9), backspace, delete, arrow keys, and tab
        if (
            (event.keyCode < 48 || event.keyCode > 57) && // Numeric keys
            (event.keyCode < 96 || event.keyCode > 105) && // Numpad keys
            event.keyCode !== 8 && // Backspace
            event.keyCode !== 46 && // Delete
            event.keyCode !== 37 && // Left arrow
            event.keyCode !== 39 // Right arrow
        ) {
            event.preventDefault(); // Prevent the input
        }
    });
});