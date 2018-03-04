function init() {
    startGame();
}



function startGame() {

    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let computerChoice = "";
    
    let userWins = 0;
    let userLosses = 0;
    
    function resetGame() {
        let userGuess = "";
        let userGuessed = [];
        let userGuessesLeft = 10;
    
        document.getElementById("guessesLeft").textContent = userGuessesLeft;
    
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("Computer letter is " + computerChoice);
    }

    resetGame();

    console.log("Game started!");

    // do things when keys are pressed
    document.onkeyup = function(event) {
        userGuess = event.key;
        
        if (userGuess === computerChoice) {
            userWins++;
            document.getElementById("wins").textContent = userWins;

            alert("You win!");
            resetGame();

        } else if ((userGuess !== computerChoice) && (userGuessesLeft > 1) && (userGuessed.indexOf(userGuess) > -1)) {
            userGuessesLeft--;
            document.getElementById("guessesLeft").textContent = userGuessesLeft;

            userGuessed.push(userGuess);
            document.getElementById("guessesSoFar").textContent = userGuessed;

        } else if ((userGuess !== computerChoice) && (userGuessesLeft === 1)) {
            userLosses++;
            document.getElementById("losses").textContent = userLosses;

            alert("You lose!");
            resetGame();
        }

    };

}


// initialize the game
init();