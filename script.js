// Array of special characters to be included in password
let specialCharacters = [
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
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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
let upperCasedCharacters = [
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

let bigArray = [] 

let passwordLength = prompt("Choose how long you would like your password to be from 10 to 64 characters.")

// Function for getting a random element from an array
function getRandom() {
  let randomSpecOption = confirm("Would you like your password to have special characters: @%$!*&?")
  if (randomSpecOption == true){
    bigArray = bigArray.concat(specialCharacters)}

  let randomNumbOption = confirm("Would you like your password to have numbers?")
  if (randomNumbOption == true){
    bigArray = bigArray.concat(numericCharacters)}
  
  let randomLowerOption = confirm("Would you like your password to have lower case letters?")
  if (randomLowerOption == true){
    bigArray = bigArray.concat(lowerCasedCharacters)}

  let randomUpperOption = confirm("Would you like your password to have upper case letters?")
  if (randomUpperOption == true){
    bigArray = bigArray.concat(upperCasedCharacters)}
    
    return bigArray
}
getRandom()

//generate a random character from the passwordGenerator x times and store the result in a variable, then join those characters into one.

// Function to generate password with user input
let practicePassword = [];

function generatePassword() {
for (let i = 0; i < passwordLength; i++) {
  let passwordGenerator = Math.floor(Math.random()*bigArray.length) //produces a random number from within the bigArray
  let randomCharacter = bigArray[passwordGenerator] // produces the value at that random number
  practicePassword += randomCharacter}

  return practicePassword
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password'); //target the html element with id password
  passwordText.value = password; //let the value of the html element with id password be equal to the function that generates a password.
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); //when we click generate btn, let the write password function run to display the randomly generated password.



//concat is good for combining arrays into one.
//push is good for adding a character to the back of an array.
//map is used in for loops to specify what we want done to the elements of an array (add/subtract them etc).