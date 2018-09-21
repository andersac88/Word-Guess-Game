var wins = 0
var guessesRemaining = 10
var computerChoices = [
    "castle",
    "knight",
    "king",
    "prince",
    "horse",
    "lance",
    "sword",
    "plague",
    "camelot",
    "crusade",
    "joust",
    "trebuchet",
    "queen",
    "princess",
];

var userChoices = [];

var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userguess-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text")
var guessesRemainingText = document.getElementById("guessesremaining-text")
var dashesChoiceText = document.getElementById("dashes")



var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var dashGuess = [];

// define function to begin the game
function begin() {
for (var i=0; i < computerGuess.length; i++) {
    dashGuess.push("_");
    console.log(dashGuess);
}
}

// define function to reset the game when you win
function reset() {
     dashGuess = [];
     userChoices = [];
     computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     guessesRemaining = 10;
}

//Run Function to start the game
begin();

// have key strokes start function
    document.onkeyup = function(event) {
        if(event.keyCode >= 65 && event.keyCode <= 90) {
        var userGuess = (event.key.toLowerCase());
        console.log(userGuess)
        

//Search computer selected word/guess for user Guess/keystroke; incorrect guess
    console.log(computerGuess.search(userGuess));
    if (computerGuess.search(userGuess) === -1) {
        guessesRemaining--
        userChoices.push(" " + userGuess)
    } 
//Search computer selected word/guess for user guess/keystroke; match
   
for (var i = 0; i < computerGuess.length; i++) {
    if (userGuess === computerGuess[i]) {
        dashGuess[i] = computerGuess[i];
    }
}

//Restart Game when out of guesses
    if (guessesRemaining === 0) {
        document.getElementById("computerchoice-text").style.cssText = "visibility: visible";
        var confirmRestart = confirm("Game Over. Would you like to try again?")
        if(confirmRestart) {
            window.location.reload();
        }
    }
//Declare Victory        
if(dashGuess.indexOf("_") === -1) {
    wins++;
    reset();
    begin();
     }

directionsText.textContent = "";
userChoiceText.textContent = "Incorrect Guesses: " + userChoices;
userGuessText.textContent = "Most Recent Guess: " + userGuess;
guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaining;
computerChoiceText.textContent = "Answer: " + computerGuess;
dashesChoiceText.textContent = dashGuess.join("");
winsText.textContent = "Number of Wins: " + wins;
}
    };
