// Assignment Code
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


// Different Arrays
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const specialCharacters = " !#$%&'()*+,-./:;<=>?@][\^_`{|}~";

var verifyLength = "";



// Write password to the #password input
function writePassword() {
  const passwordText = document.querySelector("#password");
  const password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button



function generatePassword() {
  
  const verifyLength = prompt ("Please specify how many characters you want your password to contain. (8 - 128 characters)");
  alert (verifyLength);

  if(verifyLength <= 7 || verifyLength >= 127 ) {
    alert("Password length must be between 8 and 128 characters");
  } else if (isNaN(verifyLength)) {
    verifyLength = prompt("Enter a valid number.");
  } else {
    alert("Your password will be " + verifyLength + " characters long.");
  }

  verifyUppercase = confirm ("Do you want uppercase characters in your password?");
  if (verifyUppercase) {
    alert ("Your password WILL contain uppercase characters");
  } else {
    alert ("Your password WILL NOT contain uppercase characters");
  }

  verifyLowercase = confirm ("Do you want lowercase characters in your password?");
  if (verifyLowercase) {
    alert ("Your password WILL contain lowercase characters");
  } else {
    alert ("Your password WILL NOT contain lowercase characters");
  }

  verifyNumbers = confirm ("Do you want numbers in your password?");
  if (verifyNumbers) {
    alert ("Your password WILL contain numbers");
  } else {
    alert ("Your password WILL NOT contain numbers");
  }

  verifySymbols = confirm ("Do you want ")

  }
    
  


 




