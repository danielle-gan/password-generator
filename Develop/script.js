// Assignment code here

var generatePassword = function() {

  // length of prompt
  let passLength = window.prompt("How long would you like your password to be? Please choose an integer between 8 and 128.")

  //create an array to hold the set of characters the generator can choose from
  let characters = [];

  if (passLength >= 8 && passLength <= 128) {
    passLength = Math.floor(passLength)
  } else if (passLength < 8) {
    window.alert("Your password needs to be at least 8 characters.")
    return generatePassword();
  } else if (passLength > 128) {
    window.alert("Your password needs to be less than 128 characters.")
    return generatePassword();
  } else {
    window.alert("Please enter a numeric value.")
    return generatePassword();
  };


  //prompt count to make sure they choose at least one of the following prompts
  var promptCount = 0;

  // lowercase?
  let passLowercase = window.confirm("Do you want lowercase letters in your password?")

  if(passLowercase) {
    promptCount = promptCount + 1;
    characters.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
  };

  // uppercase?
  let passUppercase = window.confirm("Do you want uppercase letters in your password?")
  
  if(passUppercase) {
    promptCount = promptCount + 1;
    characters.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  };

  // numeric values?
  let passNumeric = window.confirm("Do you want numeric values in your password?")

  if(passNumeric) {
    promptCount = promptCount + 1;
    characters.push("1","2","3","4","5","6","7","8","9","0");
  };


  // special characters?
  let passSpecial = window.confirm("Do you want special characters in your password?")

  if (passSpecial) {
    promptCount = promptCount +1;
    characters.push("!","@","#","$","%","^","&","*","?");
  };

  //check to make sure they have selected at least one prompt
  console.log(promptCount);
  if(promptCount <= 0) {
    let promptCondition = window.alert("You need to answer OK to at least one prompt");
      if(promptCondition) {
        return generatePassword();
      }
      else {
        return generatePassword();
      };
  };

  // for loop to get random characters for the length of the password

  let password = "";

  for (i=0; i < passLength; i++) {
    password = password + characters[Math.floor(Math.random()*characters.length)];
  };

  return password;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
