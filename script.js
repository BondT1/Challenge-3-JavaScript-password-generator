// Different variables.
const generateBtn = document.querySelector("#generate");
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = " !#$%&'()*+,-./:;<=>?@][\^_`{|}~";


// Write the generated password to the #password input.
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
}

/*
Prompt the use to provide password length.
Length must be a valid number greater than 8 and less than 128. 

@return number
*/
function verifyLength() {
  var verifyLength = prompt("Please specify how many characters you want your password to contain. (8 - 128 characters)");

  // verify length is a valid number.
  while (isNaN(verifyLength)) {
    alert("Enter a valid number.");
    var verifyLength = prompt("Please specify how many characters you want your password to contain. (8 - 128 characters)");
  }
  
  // verify length is between 8 and 128 characters.
  while (verifyLength < 8 || verifyLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    var verifyLength = prompt("Please specify how many characters you want your password to contain. (8 - 128 characters)");
  } 
  
  return Number(verifyLength);
} 

function generateRandomString(passwordLength, passwordCharacters) {
  // randomizes characters with specified length to create final password
  let confirmedPassword = ""
  for (let i = 0; i < passwordLength; i++) {
    let random =[Math.floor(Math.random() * passwordCharacters.length)];
    confirmedPassword = confirmedPassword + passwordCharacters[random];
  }
  return confirmedPassword;
}

function generatePassword() {
  const passwordLength = verifyLength();
  var passwordCharacters = "";

  var verifyUppercase = verifyLowercase = verifyNumbers = verifySpecial = false;
  var count = 0;

  // loops to first prompt if no criteria is selected 
  while (verifyUppercase === false && verifyLowercase === false && verifyNumbers === false && verifySpecial === false) {
    if (count > 0) {
      alert("At least one criteria must be selected");
    }
  
    verifyUppercase = confirm("Do you want uppercase characters in your password?");
    verifyLowercase = confirm("Do you want lowercase characters in your password?");
    verifyNumbers = confirm("Do you want numbers in your password?");
    verifySpecial = confirm("Do you want special characters in your password?");

    count++
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

  return generateRandomString(passwordLength, passwordCharacters)
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    
  


 




