var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var random = letters[Math.floor(Math.random() * letters.length)];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

var updateGuessesLeft = function () {
    document.querySelector("#guessLeft").innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
    this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
  };

  var updateGuessedLetters = function() {
    document.querySelector("#lets").innerHTML = "Your Guesses so far: " + guessedLetters.join(", ");
  };

  var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
  
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessedLetters();
  }
  
  updateLetterToGuess();
  updateGuessesLeft();

  document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessedLetters();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector("#wins").innerHTML = "Wins: " + wins;
                alert("You are psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            alert("Sorry, you've got a dumb ol' regualr brain.");
            reset();
        }
};

