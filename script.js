// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const passwordText = document.querySelector("#password");
  const passwordCriteria = prompt ("Password Criteria");
  alert (passwordCriteria);

  passwordText.value = password;

}

function generatePassword() {
  const password = generatePassword();
  return "password"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const symbols = " !#$%&'()*+,-./:;<=>?@][\^_`{|}~";


