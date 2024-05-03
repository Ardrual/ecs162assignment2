
const diceSelector = document.getElementById("dice-no");

function roll(){
    document.querySelectorAll("img").forEach(img => img.src ="img/dice-empty.jpg");
    let noOfDice = diceSelector.value;
    for (let i = 0; i < noOfDice; i++){
	let result = Math.floor(Math.random() * 6) + 1;
	document.getElementById(`dice${i+1}`).src = `img/${result}.jpg`;
    }
}

document.getElementById("roll").addEventListener("click", roll)
