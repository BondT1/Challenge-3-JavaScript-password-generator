// Assignment Code
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


// Different Arrays
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const symbols = " !#$%&'()*+,-./:;<=>?@][\^_`{|}~";

var verifyLength = "";



// Write password to the #password input
function writePassword() {
  const passwordText = document.querySelector("#password");
  const password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button



function generatePassword() {
  
  const verifyLength = prompt ("Please specify how many characters you want your password to contain");
  alert (verifyLength);
  return password;

  
  if(verifyLength > 128 && verifyLength < 8 ) {
    alert("Password length must be between 8 and 128 characters");
  }
}
 




