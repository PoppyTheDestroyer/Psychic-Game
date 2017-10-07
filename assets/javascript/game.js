//Letters the computer can choose
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//May be unused
//var random = letters[Math.floor(Math.random() * letters.length)];
//Sets everything to the base numbers
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;
//Identifies html element
var updateGuessesLeft = function () {
    document.getElementById("guessLeft").innerHTML = "Guesses remaining: " + guessesLeft;
};
//Chooses the computer's letter
var updateLetterToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  };
//Names and formats the letters already guessed
  var updateGuessedLetters = function() {
    document.querySelector("#lets").innerHTML = "Your Guesses so far: " + guessedLetters.join(", ");
  };
//Game over reset
  var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
  //Calls the functions at beginning
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessedLetters();
  }
  
  updateLetterToGuess();
  updateGuessesLeft();

  document.onkeyup = function(event) {
    guessesLeft--;
  //var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
var userGuess = event.key.toLowerCase();
 
guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessedLetters();

        if (guessesLeft > 0){
            if (userGuess === letterToGuess){
                wins++;
                document.querySelector("#wins").innerHTML = "Wins: " + wins;
                alert("You are psychic!");
                reset();
            }
        }else if(guessesLeft === 0){
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            alert("Sorry, you've got a dumb ol' regualr brain.");
            reset();
        }
};

