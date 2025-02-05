        var name = prompt("Enter your name (letters only):");
        var phoneNumber = prompt("Enter your phone number (8 digits):");
        var mobileNumber = prompt("Enter your mobile number (11 digits, starts with 010, 011, or 012):");
        var email = prompt("Enter your email (e.g., abc@123.com):");

        // Regex patterns for validation
        const nameRegex = /^[A-Za-z\s]+$/; // Letters and spaces only
        const phoneRegex = /^\d{8}$/; // Exactly 8 digits
        const mobileRegex = /^(010|011|012)\d{8}$/; // 11 digits, starts with 010, 011, or 012
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format

        if (!nameRegex.test(name)) {
            alert("Invalid name. Please enter letters only.");
        } else if (!phoneRegex.test(phoneNumber)) {
            alert("Invalid phone number. Please enter exactly 8 digits.");
        } else if (!mobileRegex.test(mobileNumber)) {
            alert("Invalid mobile number. Please enter 11 digits starting with 010, 011, or 012.");
        } else if (!emailRegex.test(email)) {
            alert("Invalid email. Please enter a valid email address (e.g., abc@123.com).");
        } else {
            // Display welcoming message if all inputs are valid
            alert(`
                Welcome, ${name}!
                Your information:
                - Phone Number: ${phoneNumber}
                - Mobile Number: ${mobileNumber}
                - Email: ${email}
            `);
        }
