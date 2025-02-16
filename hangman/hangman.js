const guessForm = document.getElementById("guess-form");
const wordList = ["book", "person", "spider", "plate", "baseball", "prophecy", "mandate", "margarine", "color", "hope", "bulldozer", "fire", "candle", "balloon", "burger", "floral", "captivate", "carry", "cormorant", "exult", "armiger", "landed", "palatial", "archive", "commiserate", "teal", "turquoise", "bowdlerize"];

let gameState = {
    word: "",
    guesses: 4,
    wordState: [],
    incorrectGuesses: []
}

guessForm.addEventListener("submit", handleGuess);
document.getElementById("reset").addEventListener("click", initialize);
function initialize(){
    gameState.word = wordList[Math.floor((Math.random()*wordList.length))];
    gameState.wordState.length = gameState.word.length;
    gameState.wordState.fill("_");
    gameState.guesses = 4;
    console.log(gameState.word);
    document.getElementById("current-guess").innerHTML = gameState.wordState.join(" ");
    console.log(gameState.wordState.join(""));
    document.getElementById("message").innerHTML = "";
    gameState.incorrectGuesses = [];
    document.getElementById("incorrect-letters").innerHTML="";
    updateDrawing();
}

function updateDrawing() {
    if (gameState.guesses == 4){
	document.getElementById("board").src="img/empty.jpg";
	document.getElementById("board").alt="Guesses: 4";
    }
    if (gameState.guesses == 3){
	document.getElementById("board").src="img/head.jpg";
	document.getElementById("board").alt="Guesses: 3";
    }
    if (gameState.guesses == 2){
	document.getElementById("board").src="img/body.jpg";
	document.getElementById("board").alt="Guesses: 2";
    }
    if (gameState.guesses == 1){
	document.getElementById("board").src="img/arms.jpg";
	document.getElementById("board").alt="Guesses: 1";
    }
    if (gameState.guesses == 0){
	document.getElementById("board").src="img/legs.jpg";
	document.getElementById("board").alt="Guesses: 0";
    }
}

function checkState(){
    if (gameState.wordState.join("") == gameState.word){
	document.getElementById("message").innerHTML = "You won!";
    } else if (gameState.guesses == 0){
	document.getElementById("message").innerHTML = "You lost! The word was: " + gameState.word;
    }
}

function handleGuess(event){
    let guess = document.getElementById("guess").value;
    event.preventDefault();
    console.log(guess);
    if (guess.length == 1) {
	if (gameState.wordState.includes(guess)) {
	    document.getElementById("message").innerHTML = "Already guessed!";
	} else if (gameState.word.includes(guess)) {
	    document.getElementById("message").innerHTML ="Correct!";
	    for (let i = 0; i < gameState.word.length; i++){
		if (gameState.word.charAt(i) == guess){
		    gameState.wordState[i] = guess;
		}
	    }
	} else {
	    if (gameState.incorrectGuesses.includes(guess)){
		document.getElementById("message").innerHTML = "Already guessed!";
	    } else {
		document.getElementById("message").innerHTML= "Incorrect!";
		gameState.guesses--;
		gameState.incorrectGuesses.push(guess);
	    }
	}
    } else {
	if (guess == gameState.word) {
	    document.getElementById("message").innerHTML="You won! The word was: " + gameState.word;
	} else {
	    document.getElementById("message").innerHTML = "Incorrect";
	    gameState.guesses--;
	}
    }
    document.getElementById("current-guess").innerHTML = gameState.wordState.join(" ");
    document.getElementById("guess").value = "";
    document.getElementById("incorrect-letters").innerHTML = gameState.incorrectGuesses.join(", ");
    checkState();
    updateDrawing();
}



initialize();


