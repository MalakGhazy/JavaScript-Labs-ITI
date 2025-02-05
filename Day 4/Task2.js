// Function to validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function addUser() {
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const emailInput = document.getElementById("email");

    if (!nameInput || !ageInput || !emailInput) {
        console.error("One or more input fields are missing!");
        return;
    }

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const email = emailInput.value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("emailError").textContent = "";

    let isValid = true;

    if(name === "")
    {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    }
    if(age === "" || isNaN(age) || age<1 || age>120)
    {
        document.getElementById("ageError").textContent = "Age must be a valid number between 1 and 120";
        isValid = false;
    }
    if (email === "" || !validateEmail(email)) {
        document.getElementById("emailError").textContent = "Email is invalid.";
        isValid = false;
    }
    if (isValid) {
        const tableBody = document.querySelector("#userTable tbody");
        const newRow = tableBody.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.textContent = name;
        cell2.textContent = age;
        cell3.textContent = email;

        // Clear the form
        resetForm();
    }
}

function resetForm() {
    document.getElementById("userForm").reset();
    document.getElementById("nameError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("emailError").textContent = "";
}