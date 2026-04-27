// Function to generate password
function generatePassword() {
    let length = document.getElementById("length").value;

    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;

    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let numberChars = "0123456789";
    let symbolChars = "!@#$%^&*()";

    let allChars = "";

    // Add selected character sets
    if (uppercase) allChars += upperChars;
    if (lowercase) allChars += lowerChars;
    if (numbers) allChars += numberChars;
    if (symbols) allChars += symbolChars;

    // If nothing selected
    if (allChars === "") {
        alert("Please select at least one option!");
        return;
    }

    let password = "";

    // Generate password
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById("password").value = password;

    checkStrength(password);
}

// Copy to clipboard
function copyPassword() {
    let passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied!");
}

// Password strength checker
function checkStrength(password) {
    let strengthText = document.getElementById("strength");

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) {
        strengthText.innerText = "Strength: Weak";
    } else if (strength === 3) {
        strengthText.innerText = "Strength: Medium";
    } else {
        strengthText.innerText = "Strength: Strong";
    }
}