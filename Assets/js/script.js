// create array of Uppercase letters
const upperCaseArray = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

// create array of Lowercase letters
const lowerCaseArray = Array.from("abcdefghijklmnopqrstuvwxyz");

// create array of single digit numerics
const numericArray = [0,1,2,3,4,5,6,7,8,9];

// create array of special characters
const specialCharArray = Array.from("!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~");

// function to generate a random numeric value
var randomNumber = function(num) {
  var value = Math.floor(Math.random() * num);
  return value;
};

// function to prompt password length
var getPassLength =  function() {
  // temp length value to go into the while loop
  var length = 0;

  // loop until length input is within 8 to 128 characters and is not empty space nor null
  while (length < 8 || length > 128 || tempLength === "" || tempLength === null) { 
    var tempLength = prompt("Password Length? (At least 8 characters but no more than 128 characters)");
    length = parseInt(tempLength);
  }

  return length;
};

// function to prompt password criteria
var generatePassCrit = function(){
  // set critSelect as true to go into while loop
  var critSelect = true;
  
  // loop until at least one criteria for password is selected
  while (critSelect) {
    // create criteria custom object
    var criteria = {
      length: getPassLength(),
      upperCase: window.confirm("Add Uppercase Letters?"),
      lowerCase: window.confirm("Add Lowercase Letters?"),
      numeric: window.confirm("Add Numbers?"),
      specialChar: window.confirm("Add Special Characters?")
    }

    // if at least one criteria is selected, exit loop
    if (criteria.upperCase || criteria.lowerCase || criteria.numeric || criteria.specialChar){
      critSelect = false;
    }
    else {
      window.alert("You didn't select any of the criteria. Try again!");
    }
  }

  return criteria;
}

// function to generate password
var generatePassword = function() {
  var passwordCriteria = generatePassCrit();
  
  // create empty password character array
  var passwordCharArray = [];

  // add the desired number of random characters to passwordCharArray base on the criteria
  for(var i = 0; i < passwordCriteria.length; i++){
    
    switch(randomNumber(4)){
      case 0:
        if(passwordCriteria.upperCase){
          passwordCharArray += upperCaseArray[randomNumber(upperCaseArray.length)];
        }
        else {
          i--;
        }
        break;
      case 1:
        if(passwordCriteria.lowerCase){
          passwordCharArray += lowerCaseArray[randomNumber(lowerCaseArray.length)];
        }
        else {
          i--;
        }
        break;
      case 2:
        if(passwordCriteria.numeric){
          passwordCharArray += numericArray[randomNumber(numericArray.length)];
        }
        else {
          i--;
        }
        break;
      case 3:
        if(passwordCriteria.specialChar){
          passwordCharArray += specialCharArray[randomNumber(specialCharArray.length)];
        }
        else {
          i--;
        }
        break;
    }
    
  }

  let generatedPassword = passwordCharArray.toString();

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
