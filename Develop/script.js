// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// 4 variables for character types lowercase alphabet, uppercase alphabet, numbers, and special characters
var lowercase = "abcdefghijklmnopqrstuvwxyz"; // .split puts every letter into an array .split(" "") indicates the paramters for splitting
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChars = "!@#$%^&*()_+=-.,/~";

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

// Prompt that asks user for password length
function prompts() {
  var chooseChars = prompt("How many characters would you like your password to be? Must be at least 8 and no more than 128 characters.");
  if (chooseChars >= 8 || chooseChars <= 128) {
      var passLength = chooseChars;
      console.log(passLength);
    } else {
    alert("Your password length must be at least 8 characters and no more than 128 characters.");
    generatePassword();
  };

  var upperPrompt = confirm("Would you like your password to include uppercase letters?");
  if (upperPrompt === true) {
    possibleCharacters.push(uppercase); // Pushes all uppercase letters to "posssible characters" array
    var upperRandom = Math.floor(Math.random() * uppercase.length); // Chooses one random letter from uppercase
    console.log(upperRandom,"UpperRandom"); 
    guaranteedCharacters.push(uppercase[upperRandom]);// Pushes one random uppercase letter into guaranteed characters
  };

  var lowerPrompt = confirm("Would you like your password to include lowercase letters?");
  if (lowerPrompt === true) {
    possibleCharacters.push(lowercase);
    var lowerRand = Math.floor(Math.random() * lowercase.length); // Chooses one random letter from lowercase
    console.log(lowerRand,"lowerRand");
    guaranteedCharacters.push(lowercase[lowerRand]);// Pushes one random uppercase letter into guaranteed characters
  };

  var numPrompt = confirm("Would you like your password to include numbers?");
  if (numPrompt === true) {
    possibleCharacters.push(numbers);
    var numRand = Math.floor(Math.random(numbers) * numbers.length); // Chooses one random number
    guaranteedCharacters.push(numbers[numRand]);// Pushes one random uppercase letter into guaranteed characters
  };

  specialPrompt = confirm("Would you like your password to include special characters?");
  if (specialPrompt === true) {
    possibleCharacters.push(specialChars);
    var numRand = Math.floor(Math.random(specialChars) * specialChars.length); // Chooses one random number
    guaranteedCharacters.push(specialChars[numRand]);// Pushes one random uppercase letter into guaranteed characters
    console.log(possibleCharacters);
    console.log(guaranteedCharacters);
  };

  if (!upperPrompt && !lowerPrompt && !numPrompt && !specialPrompt) {
    alert("You must select at least one character type");
    prompts();
  };

  writePassword();
  return;
};

   //  for loop to randomly select possible characters
  function choosePassword () {
    var ranPassword = "";
    console.log("ranPassword",ranPassword);
    console.log("passLength",passLength);
    console.log("PossibleChars",possibleCharacters);
    for (let index = 0; index < possibleCharacters.passLength; index++) {
      var random = Math.floor(Math.random(possibleCharacters[index]) * possibleCharacters.length);
      ranPassword = random.join(""); // Convert possible characters array to string
      console.log("random",random);
    };
    console.log("randomPass",ranPassword);
    let finalChar = guaranteedCharacters.join(""); // Convert guaranteed characters to string
    password = ranPassword + finalChar; // Combine possible and passLength
    console.log(password);
    return;
  };
  
function writePassword () {
    choosePassword();
    document.getElementById("password").innerHTML = "Your password is" + password;
};

generate.addEventListener("click",prompts);

// NOTES 

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// Check if number confirm === true, if so concat possible Chracters array with numbersArray then push one random number from numbers array into guarantted characters array
// if (numberConfirm === true) {
//   possibleCharacters.concat(numbersArray)
// }
// ^ combines array to make new array
// guaranteedCharacters/push(math.floor or math.random to randomly grab from array)
// }

// Parse int option
// changes string 8 into the number 8
// numChars = parseInt(prompt("How many characters would you like your password to be? It must be at least 8 and no more than 128 characters."))

 // } else if (chooseChars.isNaN(length) == true) {
   //   alert("Please choose a number between 8 and 128.");