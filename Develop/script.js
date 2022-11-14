// Assignment code here

// Create 4 variables for character types lowercase alphabet, uppercase alphabet, numbers, and special characters
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("") // .split puts every letter into an array .split(" "") indicates the paramters for splitting
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");
var specialChars = "!@#$%^&*()_+=-.,/~".split("");

// Create a variable for all character types
var allChars = [lowercase,uppercase,numbers,specialChars];

// Self Check that arrays are correctly entered
for (let index = 0; index < allChars.length; index++) {
  console.log(allChars[index]);
}

// Create empty arrays that will be filled as user answers prompts
var possibleCharacters = [];
var guaranteedCharacters = [];
var result = [];

// Function that asks user how many characters they would like their password to be
function characters() {
  var chooseChars = prompt("How many characters would you like your password to be? Must be at least 8 and no more than 128 characters.");
  if (chooseChars >= 8 && chooseChars <= 128) {
    chooseChars = numChars;
  // } else if (chooseChars.isNaN(length) == true) {
  //   alert("Please choose a number between 8 and 128.");
  } else {
    alert("Your password length must be at least 8 characters and no more than 128 characters.")
  }
};

// Function that asks for users if they would like to include uppercase letters
function upperChoice() {
  var upperPrompt = prompt("Would you like your password to include uppercase letters?\n Type 'yes' or 'no'.");
  upperPrompt = upperPrompt.toLowerCase();
  if (upperPrompt === "yes") {
    possibleCharacters.push(uppercase);
     // Add code to push AT LEAST ONE RANDOM LOWERCASE to "guaranteed chracters"
    // return;
  }
};

function lowerChoice() {
  var lowerPrompt = prompt("Would you like your password to include lowercase letters?\n Type 'yes' or 'no'.");
  if (lowerPrompt === "yes" || lowerPrompt === "Yes") {
    possibleCharacters.push(lowercase);
    // Add code to push AT LEAST ONE RANDOM LOWERCASE to "guaranteed chracters"
    return;
  }
};

function numChoice() {
  var numPrompt = prompt("Would you like your password to include numbers?\n Type 'yes' or 'no'.");
  if (numPrompt === "yes" || numPrompt === "Yes") {
    possibleCharacters.push(numbers);
     // Add code to push AT LEAST ONE RANDOM LOWERCASE to "guaranteed chracters"
    return;
  }
};

function specialChoice() {
  var specialPrompt = prompt("Would you like your password to include special characters?\n Type 'yes' or 'no'.");
  if (specialPrompt === "yes" || specialPrompt === "Yes") {
    possibleCharacters.push(specialChars);
     // Add code to push AT LEAST ONE RANDOM LOWERCASE to "guaranteed chracters"
    return;
  }
};

// Function that includes ALL PROMPTS
function generatePassword() {
  characters();
  upperChoice();
  lowerChoice();
  numChoice();
  specialChoice();
};

generate.addEventListener("click",generatePassword);

//  Create a generate password function
// function generatePassword() {
// create variable that holds prompt asking user how many characters they want

//  If length less than 8 or greater than 128 THEN return user alert saying password must be between 8 and 128 characters


//  Varaibles holding confirms - i think confirms means pop up
// var uppercaseConfirm = 
// 
//  asking if user would like lowercase uppercase numbers or special characters

// if user does not confirm any character type, then we alert user that they must select 1 and return them back to start
//  if uppercaseConfirm, lowercaseConfirm, .... ALL FALSE, then 

 // Check if number confirm === true, if so concat possible Chracters array with numbersArray then push one random number from numbers array into guarantted characters array
// if (numberConfirm === true) {
// //   possibleCharacters.concat(numbersArray)
// }
// // ^ combines array to make new array
// // guaranteedCharacters/push(math.floor or math.random to randomly grab from array)
// // }

// // for (let index = 0; index < array.lengththatuserinputed; index++) {
//   // randomly grab value out of char array and push value into result array
// }

//  Another for loop that will loop thru guaranteed characters
// for (let index = 0; index < guaranteedCharacters.numChars; index++) {
//   var random = math.random(guaranteedCharacters[index]);
//   var password = guaranteedCharacters.join("");
// };

// // // Get references to the #generate element
// // var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;
// // }

// // // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);
// // // On event of "click" we want to run right password function

// document.getElementById("password").innerHTML = "Your password is" + password;