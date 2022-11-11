// Assignment code here

// Create 4 variables for character types
// .split puts every letter into an array
// .split(" "") indicates the paramters for splitting
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
console.log(lowercase)
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numbers = "1234567890".split("")
var specialChars = "!@#$%^&*()_+=-"


var possibleCharacters = []
var guaranteedCharacters = []
var result = []

//  Create a generate password function
function generatePassword() {
// create variable that holds prompt asking user how many characters they want

//  If length less than 8 or greater than 128 THEN return user alert saying password must be between 8 and 128 characters

// Check if it is a number or not
if (numbers.isNaN(length))
//  TRUE = not a number; FALSE = is a number

// If length is not a number we need to alert user return the user back to start

//  Varaibles holding confirms - i think confirms means pop up
// var uppercaseConfirm = 
// 
//  asking if user would like lowercase uppercase numbers or special characters

// if user does not confirm any character type, then we alert user that they must select 1 and return them back to start
//  if uppercaseConfirm, lowercaseConfirm, .... ALL FALSE, then 

 // Check if number confirm === true, if so concat possible Chracters array with numbersArray then push one random number from numbers array into guarantted characters array
if (numberConfirm === true) {
  possibleCharacters.concat(numbersArray)
}
// ^ combines array to make new array
// guaranteedCharacters/push(math.floor or math.random to randomly grab from array)
// }

// for (let index = 0; index < array.lengththatuserinputed; index++) {
  // randomly grab value out of char array and push value into result array
}

//  Another for loop that will loop thru guaranteed characters

//  return result array - look into join method

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
// On event of "click" we want to run right password function