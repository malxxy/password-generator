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
var guaranteedCharacters = "";
var result = "";

//var passLength = ""
// Alternate method
var includedChar = "";


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
    includedChar = includedChar + uppercase; // Pushes all uppercase letters to "posssible characters" array
    var upperRandom = Math.floor(Math.random() * uppercase.length); // Chooses one random letter from uppercase
    console.log(upperRandom,"UpperRandom"); 
    guaranteedCharacters = guaranteedCharacters + uppercase[upperRandom];// Pushes one random uppercase letter into guaranteed characters
  };

  var lowerPrompt = confirm("Would you like your password to include lowercase letters?");
  if (lowerPrompt === true) {
    includedChar = includedChar + lowercase;
    var lowerRand = Math.floor(Math.random() * lowercase.length); // Chooses one random letter from lowercase
    console.log(lowerRand,"lowerRand");
    guaranteedCharacters = guaranteedCharacters + lowercase[lowerRand];
  };

  var numPrompt = confirm("Would you like your password to include numbers?");
  if (numPrompt === true) {
    includedChar = includedChar + numbers;
    var numRand = Math.floor(Math.random(numbers) * numbers.length); // Chooses one random number
    guaranteedCharacters = guaranteedCharacters + numbers[numRand];
  };

  specialPrompt = confirm("Would you like your password to include special characters?");
  if (specialPrompt === true) {
    includedChar = includedChar + specialChars;
    var specialRand = Math.floor(Math.random(specialChars) * specialChars.length); // Chooses one random number
    guaranteedCharacters = guaranteedCharacters + specialChars[specialRand];
    console.log(includedChar);
    console.log(guaranteedCharacters);
  };

  if (!upperPrompt && !lowerPrompt && !numPrompt && !specialPrompt) {
    alert("You must select at least one character type");
    prompts();
  };
  writePassword(passLength);
  return;
};

   //  for loop to randomly select possible characters
  function choosePassword (passLength) {
    var ranPassword = "";
    console.log("ranPassword",ranPassword);
    console.log("passLength",passLength);
    console.log("PossibleChars",includedChar);
    for (let index = 0; index < passLength; index++) {
      var random = Math.floor(Math.random(includedChar[index]) * includedChar.length);
      ranPassword = ranPassword + includedChar[random]; // Convert possible characters array to string
      console.log("random",random);
    };
    console.log("randomPass",ranPassword);
    let finalChar = guaranteedCharacters.concat();
    let password = ranPassword + finalChar; // Combine possible and passLength
    console.log(password);
    // return;

    return password;
  };
  
function writePassword (passLength) {
  console.log(passLength)
    var userPassword = choosePassword(passLength);
    document.getElementById("password").innerHTML = "Your password is " + userPassword;
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