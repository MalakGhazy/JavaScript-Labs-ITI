function validateForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById("address").value;

    // Store user data in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("gender", gender);
    localStorage.setItem("address", address);

    // Redirect to the welcoming page
    window.location.href = "welcome.html";
}

// Timeout after 30 seconds of inactivity
setTimeout(() => {
    alert("You took too long to fill the form. Please try again.");
    window.location.href = "Task2.html"; // Redirect back to the form
  }, 30000); // 30 seconds