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

for (var i=0; i < computerGuess.length; i++) {
    dashGuess.push("_");
    console.log(dashGuess);
}


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
    else if (computerGuess.search(userGuess) === 0) {
        dashGuess[0] = userGuess
    }   else if (computerGuess.search(userGuess) === 1) {
        dashGuess[1] = userGuess
    }   else if (computerGuess.search(userGuess) === 2) {
        dashGuess[2] = userGuess
    }   else if (computerGuess.search(userGuess) === 3) {
        dashGuess[3] = userGuess
    }   else if (computerGuess.search(userGuess) === 4) {
        dashGuess[4] = userGuess
    }   else if (computerGuess.search(userGuess) === 5) {
        dashGuess[5] = userGuess
    }   else if (computerGuess.search(userGuess) === 6) {
        dashGuess[6] = userGuess
    }   else if (computerGuess.search(userGuess) === 7) {
        dashGuess[7] = userGuess
    }   else if (computerGuess.search(userGuess) === 8) {
        dashGuess[8] = userGuess
    }   else if (computerGuess.search(userGuess) === 9) {
        dashGuess[9] = userGuess
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
// reset game?
     }

directionsText.textContent = "";
userChoiceText.textContent = "Incorrect Guesses: " + userChoices;
userGuessText.textContent = "Most Recent Guess: " + userGuess;
guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaining;
computerChoiceText.textContent = computerGuess;
dashesChoiceText.textContent = dashGuess;
winsText.textContent = "Number of Wins: " + wins;
};

// notes to self......
// have selection displayed where - - - - - - - represents letters of word
  

// have players selection displayed (ensure capital letter); if correct replace - with letter, if incorrect reduce guesses remaining 

// computer selects another word after guesses remaining = 0 or word is guessed

//userChoiceText.appendChild(nextChoiceText);
//nextChoiceText.textContent = userGuess;
//var nextChoiceText = document.createElement("span")

//var txt2 = txt1.slice(0, 3) + "bar" + txt1.slice(3);

