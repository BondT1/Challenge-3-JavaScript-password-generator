// Assignment Code
const generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Different Arrays
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const specialCharacters = " !#$%&'()*+,-./:;<=>?@][\^_`{|}~";
const finalPassword = ""

// Write password to the #password input
function writePassword() {
  const passwordText = document.querySelector("#password");
  const password = generatePassword();

  passwordText.value = password;

}


function generatePassword() {
  
  var verifyLength = prompt ("Please specify how many characters you want your password to contain. (8 - 128 characters)");
  alert (verifyLength);

  while(verifyLength <= 7 || verifyLength >= 127 ) {
    alert("Password length must be between 8 and 128 characters");
    var verifyLength = prompt ("Please specify how many characters you want your password to contain. (8 - 128 characters)");
  } 

  while (isNaN(verifyLength)) {
    alert("Enter a valid number.");
    var verifyLength = prompt ("Please specify how many characters you want your password to contain. (8 - 128 characters)");
  }
    
  alert("Your password will be " + verifyLength + " characters long.");
  

  var verifyUppercase = confirm ("Do you want uppercase characters in your password?");
  if (verifyUppercase) {
    alert ("Your password WILL contain uppercase characters");
  } else {
    alert ("Your password WILL NOT contain uppercase characters");
  }

  var verifyLowercase = confirm ("Do you want lowercase characters in your password?");
  if (verifyLowercase) {
    alert ("Your password WILL contain lowercase characters");
  } else {
    alert ("Your password WILL NOT contain lowercase characters");
  }

  var verifyNumbers = confirm ("Do you want numbers in your password?");
  if (verifyNumbers) {
    alert ("Your password WILL contain numbers");
  } else {
    alert ("Your password WILL NOT contain numbers");
  }

  var verifySpecial = confirm ("Do you want special characters in your password?");
  if (verifySpecial) {
    alert ("Your password WILL contain special characters");
  } else {
    alert ("Your password WILL NOT contain special characters");
  }

  while(verifyUppercase === false && verifyLowercase === false && verifyNumbers === false && verifySpecial === false) {
    alert("At least one criteria must be selected")
    var verifyUppercase = confirm ("Do you want uppercase characters in your password?");
    var verifyLowercase = confirm ("Do you want lowercase characters in your password?");
    var verifyNumbers = confirm ("Do you want numbers in your password?");
    var verifySpecial = confirm ("Do you want special characters in your password?");
  }

  // Might not use the alerts for the above 4 variables due to it having to be very long winded when creating the above loop

  if (verifyUppercase) {
    finalPassword = finalPassword.concat(uppercaseLetters);
  }
  if (verifyLowercase) {
    finalPassword = finalPassword.concat(lowercaseLetters);
  }
  if (verifyNumbers) {
    finalPassword = finalPassword.concat(numbers);
  }
  if (verifySpecial) {
    finalPassword = finalPassword.concat(specialCharacters);
  }


  }
    
  


 




