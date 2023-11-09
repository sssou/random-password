// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Object containing password criteria
var crit = {
  passlength: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false,
}

// Function to prompt user for password options
function getPasswordOptions() {
  // user is forced to enter number between 8 and 128 (can still enter a wrong data type)
  while ((crit.passlength < 8) || (crit.passlength > 128)) {
      crit.passlength = parseInt(prompt("Enter the length of password (8 - 128 characters)"));
  }
  // user is forced to enter yes for atleast 1 char type
  while ((crit.lowercase === false) && (crit.uppercase === false) && (crit.numeric === false) && (crit.special === false)) {
    alert("you must choose atleast one of the 4 character types (recomended to choose all 4)")
    crit.lowercase = confirm("would you like lowercased characters?")
    crit.uppercase = confirm("would you like uppercased characters?")
    crit.numeric = confirm("would you like numeric characters?")
    crit.special = confirm("would you like special characters?")
  }
}


// Function for getting a random element from an array
function getRandom(arr) {
  var i = Math.floor(Math.random() * arr.length)
  return (arr[i])
}


// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);