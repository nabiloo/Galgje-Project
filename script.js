// const clean = function () {
//   document.querySelector("input").value = "";
// };

// const spanTheWord1 = function (word) {
//   document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
// };

// function getThePlayer(player) {
//   let play = document.getElementById("player1");
//   play = play + "We are about to start the game";
//   return play;
// }

let word;
const maxAmount = 5;
let inputs;
let gameOver;
let tries = 0;

const loseMessage = document.querySelector(".lose")
const winMessage = document.querySelector(".win")
const livesRemaningMessage = document.querySelector(".lives span")
const displayWrongLetters = document.querySelector(".guessed_letters")
const diplayCorrectLetters = document.querySelector(".the_word")
const inputfield = document.querySelector("input")
const displayCorrectWord = document.querySelector(".lose p span")


////////////////////////////////////////////////
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw"
];

// selecteerd een woord uit een array wordList
const wordpicker = function (array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
};

//  checkt of letter aanwezig is in woord, als er geen letter is meer over zijn geeft hij true
const wordGuessed = function (word, inputs) {
  let remaining = word.filter(function (letter) {
    return !inputs.includes(letter);
  });
  return remaining.length === 0;
};

// het zichtbaar maken van de win message - status van de game naar true
const winTheGame = function () {
  winMessage.style.display = "block";
  return gameOver = true;
};

// het zichtbaar maken van de lose message - status van de game naar true
const lose4 = function () {
  loseMessage.style.display = "block";
  gameOver = true;
};

// weergeven van de nog aantal pogingen te gaan.
const updateTriesDisplay = function (tries) {
  livesRemaningMessage.innerHTML = 5 - tries;
  return 5 - tries;
};

// het weergeven van de foute geraden letters 
const letters = function (word, inputs) {
  let wrongLetters = inputs.filter(function (letter) {
    return !word.includes(letter);
  });
  displayWrongLetters.innerHTML = wrongLetters.join(" ");
};

// kijkt of  de user-input in het woord zit,  als ja: letter, else een streepje
const theWord = function (word, inputLetterWords) {
  let display = word.map(function (letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  diplayCorrectLetters.innerHTML = display.join(" ");
  return display.join(" ");
};

const guessLetter = function () {
  // als gameover dan stopt het spel
  if (gameOver) {
    return;
  }

  // neemt de input-veld waarde  en reset de input-veld
  const input1 = document.querySelector("input").value;
  inputfield.value = "";

  // als de input al in de array aanwezig of de input is leeg dat terug
  if (inputs.includes(input1) || input1 === "") {
    return;
  }

  // als de letter niet in het woord zit,  updates de poging met 1, en laat dat zien in de html
  if (!word.includes(input1)) {
    tries++;
    livesRemaningMessage.innerHTML = 5 - tries;
  }

  // elke input wordt opgeslagen
  inputs.push(input1);

  // hier worden de functie ge-called voor het updaten van de DOM.
  theWord(word, inputs);
  letters(word, inputs);

  // als de uitkomst van de functie true is dan runt hij de functie binnen de game.
  // checkt of tries meer of gelijk aan 5,  als zo dan lose functie.
  if (wordGuessed(word, inputs)) {
    winTheGame();
  } else if (tries >= 5) {
    lose4();
  }
};


function beginTheGameWithPlayer(player1) {

  // status van de game, zet de visibilty uit win of lose (display: none)
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";

  // selecteerd een woord uit een array wordList en laat het zien
  word = wordpicker(wordList).split("");
  displayCorrectWord.innerHTML = `"${word.join("")}"`;

  // start waarde van de pogingen en display dat
  tries = 0;
  livesRemaningMessage.innerHTML = 5 - 0;

  // lege array voor straks, voor de user input 
  inputs = [];

  // checkt de input met de woord
  theWord(word, inputs);
  letters(word, inputs);
}


document.addEventListener("DOMContentLoaded", function () {
  const guessButton = document.querySelector(".guess")
  guessButton.addEventListener("click", guessLetter);
  document.querySelector(".restart").addEventListener("click", beginTheGameWithPlayer);
  beginTheGameWithPlayer();
});

//module.exports = { wordpicker, theWord, updateTriesDisplay };



