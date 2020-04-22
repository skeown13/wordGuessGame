// create Variable to store wins, current word, current guess, letters already guessed, etc

let win = 0;
let currentWord = "";
let guessLeft = 10;
let guessAlready = [];

// create Variables as placeholders for where we will put to the html

let winText = document.getElementById("win-text");
let currentWordText = document.getElementById("current-word-text");
let guessLeftText = document.getElementById("guess-left-text");
let guessMadeText = document.getElementById("guess-made-text");

// create an array for possible words to be the word that the user is guessing

let possibleWords = ["xerox", "blank", "spirit"];

// when first time button is pushed set out the layout of the current word

// if a letter in the current word is pressed replace the placeholder in the layout with the correct letter in the correct space (loop through?)

// every time a letter is pressed decrease teh number of guesses by 1

// when a letter is pressed add that letter to the letters already guessed array

// if current word is guessed increment wins by 1

// 