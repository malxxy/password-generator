// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// 4 variables for character types lowercase alphabet, uppercase alphabet, numbers, and special characters
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("") // .split puts every letter into an array .split(" "") indicates the paramters for splitting
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");
var specialChars = "!@#$%^&*()_+=-.,/~".split("");

// Variable for all character types
var allChars = [lowercase,uppercase,numbers,specialChars];

// Check that arrays are correctly entered
for (let index = 0; index < allChars.length; index++) {
  console.log(allChars[index]);
}

// Empty arrays that will be filled as user answers prompts
var possibleCharacters = [];
var guaranteedCharacters = [];
var result = [];

// Prompt that asks user password length
var chooseLength = prompt("How many characters would you like your password to be? Must be at least 8 and no more than 128 characters.");
if (chooseChars >= 8 || chooseChars <= 128) {
    chooseLength = length;
    console.log(length);
  } else {
  alert("Your password length must be at least 8 characters and no more than 128 characters.");
  generatePassword();
};

// Prompt that asks for users if they would like to include uppercase letters
var upperPrompt = prompt("Would you like your password to include uppercase letters?\n Type 'yes' or 'no'.");
upperPrompt = upperPrompt.toLowerCase();
if (upperPrompt === "yes") {
  possibleCharacters.push(uppercase); // Pushes all uppercase letters to "posssible characters" array
  var upperRandom = Math.floor(Math.random(uppercase)) // Chooses one random letter from uppercase
  guaranteedCharacters.push(upperRandom);// Pushes one random uppercase letter into guaranteed characters
};

var lowerPrompt = prompt("Would you like your password to include lowercase letters?\n Type 'yes' or 'no'.");
if (lowerPrompt === "yes" || lowerPrompt === "Yes") {
  possibleCharacters.push(lowercase);
  var lowerRand = Math.floor(Math.random(lowercase)) // Chooses one random letter from lowercase
  guaranteedCharacters.push(lowerRand);// Pushes one random uppercase letter into guaranteed characters
  return;
};

var numPrompt = prompt("Would you like your password to include numbers?\n Type 'yes' or 'no'.");
if (numPrompt === "yes" || numPrompt === "Yes") {
  possibleCharacters.push(numbers);
  var numRand = Math.floor(Math.random(numbers)) // Chooses one random number
  guaranteedCharacters.push(numRand);// Pushes one random uppercase letter into guaranteed characters
  return;
};

specialPrompt = prompt("Would you like your password to include special characters?\n Type 'yes' or 'no'.");
if (specialPrompt === "yes" || specialPrompt === "Yes") {
  possibleCharacters.push(specialChars);
  var numRand = Math.floor(Math.random(numbers)) // Chooses one random number
  guaranteedCharacters.push(numRand);// Pushes one random uppercase letter into guaranteed characters
  return;
};

// Function that includes ALL PROMPTS
function generatePassword() {
  chooseLength;
  upperPrompt;
  lowerPrompt;
  numPrompt;
  specialPrompt;
};

generate.addEventListener("click",generatePassword);

// Check if number confirm === true, if so concat possible Chracters array with numbersArray then push one random number from numbers array into guarantted characters array
// if (numberConfirm === true) {
//   possibleCharacters.concat(numbersArray)
// }
// ^ combines array to make new array
// guaranteedCharacters/push(math.floor or math.random to randomly grab from array)
// }

for (let index = 0; index < array.lengththatuserinputed; index++) {
// randomly grab value out of char array and push value into result array
};

//  Another for loop that will loop thru guaranteed characters
for (let index = 0; index < guaranteedCharacters.numChars; index++) {
   var random = math.random(guaranteedCharacters[index]);
   var password = guaranteedCharacters.join("") // converts array into string
   };

   document.getElementById("password").innerHTML = "Your password is" + password;

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// NOTES 

// Parse int option
// changes string 8 into the number 8
// numChars = parseInt(prompt("How many characters would you like your password to be? It must be at least 8 and no more than 128 characters."))

 // } else if (chooseChars.isNaN(length) == true) {
   //   alert("Please choose a number between 8 and 128.");