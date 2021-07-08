// Assignment code here
var getPassLength =  function() {
  var length = 0;

  while (length < 8 || length > 128) {
      var tempLength = prompt("Password Length? (At least 8 characters but no more than 128 characters)");
      length = parseInt(tempLength);
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passCriteria = {
    length: getPassLength(),
    upperCase: window.confirm("Add Uppercase Letters?"),
    lowerCase: window.confirm("Add Lowercase Letters?"),
    numeric: window.confirm("Add Numbers?"),
    specialChar: window.confirm("Add Special Characters?")
  };

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
