var activePlayer, scores, roundScore, diceScore, previousDiceScore;

initNewGame();

document.querySelector('.roll-dice').addEventListener('click',function(){
	
	//dice score from 1 to 6
	diceScore = (Math.floor(Math.random() * 6) + 1);

	document.getElementById("dice").src = "./img/dice-" + diceScore + ".png";

	console.log(diceScore);

	//Check if dice score equal to 1, if its equal to one than the round score for the active player is equal to 0
	if(diceScore === 1){
		roundScore = 0;
		document.querySelector('.round-score-one').innerHTML = roundScore;
	} else {
		roundScore += diceScore ;
		document.querySelector('.round-score-one').innerHTML = roundScore;
		//console.log(score);
	}
});

document.querySelector('.new-game').addEventListener('click',function(){
	initNewGame();
});

/*
	initialises the game with all the score set to 0
*/
function initNewGame(){
	activePlayer = 0;

	scores = [0,0]

	roundScore = 0;

	previousDiceScore = 0;

	document.getElementById('total-score-one').innerHTML = 0;
	document.getElementById('total-score-two').innerHTML = 0;
	document.querySelector('.round-score-one').innerHTML = 0;
	document.querySelector('.round-score-two').innerHTML = 0;
}
