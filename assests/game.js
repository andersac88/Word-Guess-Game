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

directionsText.textContent = "";
userChoiceText.textContent = "Incorrect Guesses: " + userChoices;
userGuessText.textContent = "Most Recent Guess: " + userGuess;
guessesRemainingText.textContent = guessesRemaining;
computerChoiceText.textContent = computerGuess;
dashesChoiceText.textContent = dashes;


    document.onkeyup = function(event) {
    var userGuess = event.key;

    function evaluateGuess(letter) {
        // Array to store positions of letters in string
        var positions = [];
    
        // Loop through word finding all instances of guessed letter, store the indicies in an array.
        for (var i = 0; i < computerChoices[computerGuess].length; i++) {
            if(computerChoices[computerGuess][i] === userGuess) {
                positions.push(i);
            }
        }
    
        // if there are no indicies, remove a guess and update the hangman image
        if (positions.length <= 0) {
            remainingGuesses--;
        } else {
            // Loop through all the indicies and replace the '_' with a letter.
            for(var i = 0; i < positions.length; i++) {
                dashes[positions[i]] = userGuess;
            }
        });
     
   



// notes to self......
// have selection displayed where - - - - - - - represents letters of word
  

// have players selection displayed (ensure capital letter); if correct replace - with letter, if incorrect reduce guesses remaining 

// computer selects another word after guesses remaining = 0 or word is guessed

//userChoiceText.appendChild(nextChoiceText);
//nextChoiceText.textContent = userGuess;
//var nextChoiceText = document.createElement("span")

//var txt2 = txt1.slice(0, 3) + "bar" + txt1.slice(3);
//else if (computerGuess[1] === userGuess) {
    //dashes = dashes.slice(0,1) + userGuess;
   // else if (computerGuess[1] === userGuess) {
    // dashes = dashes.slice(0,1) + userGuess;
    // else if (computerGuess[1] === userGuess) {
        /// dashes = dashes.slice(0,1) + userGuess;




