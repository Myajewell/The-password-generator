var characterLength = 8;
var choiceArr = [];
var specialChar = ['#','!','&','*','?','%',';','>','<',':','{','}','.','/','|','=','-','_','~',];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var num = ['1','2','3','4','5','6','7','8','9','0',];

// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function writePassword() {
var correctPrompts = getPrompts(); 
var passwordText = document.querySelector("#password");

if (correctPrompts) {
  var newPassword = generatePassword(); 
  passwordText.value = newPassword;
} else {
  passwordText.value = "";

}
}


function generatePassword() {

  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts(){
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characrers"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("character length has to be between 8 - 128. Please try again.");
    return false;
  }
  
  if (confirm("Would you like lowercase letters in your password?")) {
      choiceArr = choiceArr.concat(lowerCase);
}

if (confirm("Would you like uppercase letters in your password?")) {
      choiceArr = choiceArr.concat(upperCase);
}

if (confirm("Would you special characters in your password?")) {
  choiceArr = choiceArr.concat(specialChar);
}
if (confirm("Would you like numbers in your password?")) {
  choiceArr = choiceArr.concat(num);
}
return true;
}

