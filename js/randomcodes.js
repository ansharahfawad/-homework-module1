"use strict";
// ----- RANDOM CODES -----

var code = "";
var getCode = "";

// Character set used to generate random codes
var str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

// Generate a combination of 8 random characters
function generateCode() {
    var generatedCode = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

    for (var i = 0; i < 8; i++) {
        var char = Math.floor(Math.random() * characters.length);
        generatedCode += characters.charAt(char);
    }

    return generatedCode;
}

// Display the generated code
var codesElement = document.getElementById("codes");
var submitButton = document.getElementById("submit");
var codebox = document.getElementById("codeentered");

// Store the generated code globally so it can be validated
code = generateCode();
codesElement.textContent = code;

// Enable or disable the submit button
function disableButton(btnvalue) {
    submitButton.disabled = btnvalue;

    if (btnvalue === true) {
        submitButton.style.backgroundColor =
            "rgba(73, 119, 209, 0.3)";

        submitButton.style.color =
            "rgba(255, 255, 255, 0.5)";
    } else {
        submitButton.style.backgroundColor =
            "rgba(73, 119, 209, 1)";

        submitButton.style.color =
            "rgba(255, 255, 255, 1)";
    }
}

// Validate the code entered by the user
function evaluateCode() {
    getCode = codebox.value.trim();

    if (getCode === code) {
        disableButton(false);
    } else {
        disableButton(true);
    }
}

// Listen for user input
codebox.addEventListener("input", evaluateCode);

// ----- CONDITIONAL CONTACT FIELDS -----

var contactMethod = document.getElementById("contactMethod");
var emailField = document.getElementById("emailField");
var phoneField = document.getElementById("phoneField");

var contactEmail = document.getElementById("contactEmail");
var contactPhone = document.getElementById("contactPhone");

// Show the input field corresponding to the selected option
function showContactField() {
    // Hide both fields first
    emailField.hidden = true;
    phoneField.hidden = true;

    // Only show the selected field
    if (contactMethod.value === "email") {
        emailField.hidden = false;
    } else if (contactMethod.value === "phone") {
        phoneField.hidden = false;
    }
}

// Listen for dropdown selection changes
contactMethod.addEventListener("change", showContactField);

// Initialize the page
disableButton(true);
showContactField();
