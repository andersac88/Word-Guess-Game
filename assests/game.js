var wins = 0
var guessesRemaining = 10

var computerChoices = [
    "castle",
    "knight",
    "queen",
    "king",
    "prince",
    "dungeon",
    "princess",
    "jester",
    "sword",
    "plague",
    "camelot",
    "crusade",
    "trebuchet",
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
var dashes = computerGuess.replace(/[a-z]/g,"-");

    document.onkeyup = function(event) {
    var userGuess = event.key;
     
    for (var i = 0; i < computerGuess.length; i++) {
       if (computerGuess[i] === userGuess) {
           dashes = userGuess;
           // if else... perhaps make multiple variables for dashes with relation to position in string for a .replace
           // var userCorrect = userGuess.toString()
           // dashes = userCorrect
           // console.log(userCorrect);
        }  
    }  
        if (guessesRemaining === 0) {
            var confirmRestart = confirm("Game Over. Would you like to try again?")
            if(confirmRestart) {
                window.location.reload();
            } 
    } if ((computerGuess[0] !== userGuess) &&
        (computerGuess[1] !== userGuess) && 
        (computerGuess[2] !== userGuess) &&
        (computerGuess[3] !== userGuess) &&
        (computerGuess[4] !== userGuess) &&
        (computerGuess[5] !== userGuess) &&
        (computerGuess[6] !== userGuess) &&
        (computerGuess[7] !== userGuess) &&
        (computerGuess[8] !== userGuess) &&
        (computerGuess[9] !== userGuess)){
        guessesRemaining--
        userChoices.push(" " + userGuess)
    };

directionsText.textContent = "";
userChoiceText.textContent = "Incorrect Guesses: " + userChoices;
userGuessText.textContent = "Most Recent Guess: " + userGuess;
guessesRemainingText.textContent = guessesRemaining;
computerChoiceText.textContent = computerGuess;
dashesChoiceText.textContent = dashes;
};

// notes to self......
// have selection displayed where - - - - - - - represents letters of word
  

// have players selection displayed (ensure capital letter); if correct replace - with letter, if incorrect reduce guesses remaining 

// computer selects another word after guesses remaining = 0 or word is guessed

//userChoiceText.appendChild(nextChoiceText);
//nextChoiceText.textContent = userGuess;
//var nextChoiceText = document.createElement("span")

//var txt2 = txt1.slice(0, 3) + "bar" + txt1.slice(3);




