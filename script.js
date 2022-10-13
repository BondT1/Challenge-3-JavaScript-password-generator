// Assignment Code
const generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
}

// Different variables
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@][\^_`{|}~";
var passwordCharacters = ""


function generatePassword() {
 
  // Prompt for the number of characters in the password 
  var verifyLength = prompt ("Please specify how many characters you want your password to contain. (8 - 128 characters)");
  alert (verifyLength);

  // Loops back round to the above prompt if the criteria is not met
  while(verifyLength <= 7 || verifyLength >= 127 ) {
    alert("Password length must be between 8 and 128 characters");
    var verifyLength = prompt ("Please specify how many characters you want your password to contain. (8 - 128 characters)");
  } 

  while (isNaN(verifyLength)) {
    alert("Enter a valid number.");
    var verifyLength = prompt ("Please specify how many characters you want your password to contain. (8 - 128 characters)");
  }

  // Confirms password length to user 
  alert("Your password will be " + verifyLength + " characters long.");
  
  //Prompts for the different parameters within the password
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

  // loops to first prompt if no criteria is selected - however does not include alerts as need to add these in - may make code too long winded though
  while(verifyUppercase === false && verifyLowercase === false && verifyNumbers === false && verifySpecial === false) {
    alert("At least one criteria must be selected")
    var verifyUppercase = confirm ("Do you want uppercase characters in your password?");
    var verifyLowercase = confirm ("Do you want lowercase characters in your password?");
    var verifyNumbers = confirm ("Do you want numbers in your password?");
    var verifySpecial = confirm ("Do you want special characters in your password?");
  }
  
  // Arrays grouped together to create password criteria selections
  if (verifyUppercase) {
    passwordCharacters = passwordCharacters.concat(uppercaseLetters);
  }
  if (verifyLowercase) {
    passwordCharacters = passwordCharacters.concat(lowercaseLetters);
  }
  if (verifyNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers);
  }
  if (verifySpecial) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }

  // randomizes characters with specified length to create final password
  let confirmedPassword = ""
  for (let i = 0; i < verifyLength; i++) {
    let random =[Math.floor(Math.random() * passwordCharacters.length)];
    confirmedPassword = confirmedPassword + passwordCharacters[random];
  }
  return confirmedPassword;
};
    
  


 




