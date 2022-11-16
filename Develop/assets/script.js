// Assignment code here

// 4 variables for character types lowercase alphabet, uppercase alphabet, numbers, and special characters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChars = "!@#$%^&*()_+=-.,/~";

// Empty string that will be filled as user answers prompts
var guaranteedCharacters = "";
var includedChar = "";
var lengthPassword = NaN;

// Prompt that asks user for password length
function prompts() {
  var chooseChars = prompt("How many characters would you like your password to be? Must be at least 8 and no more than 128 characters.");
  if (chooseChars >= 8 && chooseChars <= 128) {
      var passLength = chooseChars;
      console.log("User chosen password length",passLength);
    } else if (chooseChars < 8) {
      alert("Your password length must be at least 8 characters.");
      prompts();
    } else if (chooseChars > 128) {
      alert("Your password length must be no more than 128 characters.")
      prompts();
    } else {
      alert("Please enter a number.")
      prompts();
    };

  var upperPrompt = confirm("Would you like your password to include uppercase letters?");
  if (upperPrompt === true) {
    includedChar = includedChar + uppercase; // Pushes all uppercase letters to "posssible characters" array
    var upperRandom = Math.floor(Math.random() * uppercase.length); // Chooses one random letter from uppercase
    guaranteedCharacters = guaranteedCharacters + uppercase[upperRandom];// Pushes one random uppercase letter into guaranteed characters
  };

  var lowerPrompt = confirm("Would you like your password to include lowercase letters?");
  if (lowerPrompt === true) {
    includedChar = includedChar + lowercase;
    var lowerRand = Math.floor(Math.random() * lowercase.length); // Chooses one random letter from lowercase
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
  };

  if (!upperPrompt && !lowerPrompt && !numPrompt && !specialPrompt) {
    alert("You must select at least one character type");
    prompts();
  };

  console.log("Possible characters to be included",includedChar);
  console.log("Characters that WILL be included",guaranteedCharacters);
  lengthPassword = passLength - guaranteedCharacters.length;
  writePassword(passLength);
  return;
};

 //  for loop to randomly select possible characters
function choosePassword () {
  var ranPassword = "";
 
  for (let index = 0; index < lengthPassword; index++) {
    var random = Math.floor(Math.random(includedChar[index]) * includedChar.length);
    ranPassword = ranPassword + includedChar[random]; // Convert possible characters array to string
  };

  let finalChar = guaranteedCharacters.concat();
  let password = ranPassword + finalChar; // Combine possible and passLength
  console.log("Final password",password);

  return password;
};

function writePassword () {
  var userPassword = choosePassword();
  document.getElementById("password").innerHTML = "Your password is " + userPassword;
};

generate.addEventListener("click",prompts);