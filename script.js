// Event listener for sign-up form submission
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    clearErrors();

    // Initialize error flag
    let isValid = true;

    // Perform validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;

    // Validation for name (characters only)
    if (!isValidName(name)) {
        showError("name-error", "Name must contain only letters");
        isValid = false;
    }

    // Validation for email
    if (email === "") {
        showError("email-error", "Please enter your email");
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError("email-error", "Please enter a valid email address");
        isValid = false;
    }

    // Validation for phone number (exactly 10 digits)
    if (!isValidPhoneNumber(phone)) {
        showError("phone-error", "Phone number must be 10 digits");
        isValid = false;
    }

    // Validation for password (uppercase, lowercase, number, special character)
    if (!isValidPassword(password)) {
        showError("password-error", "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
        isValid = false;
    }

    // Validation for confirmed password
    if (confirm_password === "") {
        showError("confirm-password-error", "Please confirm your password");
        isValid = false;
    } else if (password !== confirm_password) {
        showError("confirm-password-error", "Passwords do not match");
        isValid = false;
    }

    // If form is valid, proceed
    if (isValid) {
        // Store data locally (for demonstration purpose)
        const userData = {
            name: name,
            email: email,
            phone: phone,
            password: password
        };
        localStorage.setItem("userData", JSON.stringify(userData));

        // Redirect to login page
        window.location.href = "Login.html";

        // Optional: Alert for account creation (you can customize this alert as needed)
        alert("Account created successfully! Please proceed to login.");

        // Clear form fields
        document.getElementById("signup-form").reset();
        clearErrors();
    }
});

// Function to show error messages
function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

// Function to clear error messages
function clearErrors() {
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("phone-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("confirm-password-error").textContent = "";
}

// Validation functions (unchanged from previous response)
function isValidName(name) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isValidPhoneNumber(phone) {
    const regex = /^\d{10}$/;
    return regex.test(phone);
}

function isValidPassword(password) {
    // Password must be at least 6 characters long and contain at least one uppercase, one lowercase, one number, and one special character
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
}
function togglePasswordVisibility(inputId, eyeIconId) {
    const passwordField = document.getElementById(inputId);
    const eyeIcon = document.getElementById(eyeIconId);

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.src = './eye-off.png'; // Path to eye-off icon for visibility off state 
    } else {
        passwordField.type = 'password';
        eyeIcon.src = './eye-on.png'; // Path to eye icon for visibility on state
    }
}


