// ----- RANDOM CODES -----

var code = '';
var getCode = '';
var btnvalue;

// Character set used to generate random codes
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//Function to generate combination of characters
function generateCode() {
    //Create variables to store generated codes and the type of characters we want to show as codes
    var code = ''; //initialize to null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    //Generate character multiple times using a loop
    for (i = 1; i <= 8; i++) {
        var char = Math.random() * str.length; //random select a character from the variable and then store in a new variable
        code += str.charAt(char); //accumulate the generated character into a string of 8 characters
    }

    return code; //return the final accumulated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
// Determine when to enable or disable the button
function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue;

    if (btnvalue === true) {
        // Set button and label color translucent
        document.getElementById("submit").style.backgroundColor =
            "rgba(73, 119, 209, 0.3)";

        document.getElementById("submit").style.color =
            "rgba(255, 255, 255, 0.5)";
    } else {
        // Set button and label color without transparency
        document.getElementById("submit").style.backgroundColor =
            "rgba(73, 119, 209, 1)";

        document.getElementById("submit").style.color =
            "rgba(255, 255, 255, 1)";
    }
}

// Listen to user input code
var codebox = document.getElementById("codeentered");

codebox.addEventListener("input", evaluateCode);

// Run function when user enters a character in the textbox
function evaluateCode() {
    // Get the code entered by the user
    getCode = document.getElementById("codeentered").value;

    // Remove any hidden characters
    var charset1 = getCode.trim();
    var charset2 = code.trim();

    // Test whether the entered code matches the generated code
    if (charset1.length === charset2.length &&
        charset1 === charset2) {
        disableButton(false);
    } else {
        disableButton(true);
    }
}

//Activate function
disableButton();