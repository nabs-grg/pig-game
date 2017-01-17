var activePlayer, scores, roundScore;

initNewGame();

document.querySelector('.roll-dice').addEventListener('click',function(){
	
	//dice score from 1 to 6
	var diceScore = (Math.floor(Math.random() * 6) + 1);

	document.getElementById("dice").src = "./img/dice-" + diceScore + ".png";

	console.log(diceScore);

	//Check if dice score equal to 1, if its equal to one than the round score for the active player is equal to 0
	if(diceScore !== 1){
		roundScore += diceScore ;
		document.querySelector('#round-score-' + activePlayer ).innerHTML = roundScore;
		
	} else {
		if(activePlayer === 'one'){
			activePlayer = 'two'
			nextPlayer(activePlayer);
			console.log(activePlayer);
		} else {
			activePlayer = 'one'
			nextPlayer(activePlayer);
			console.log(activePlayer);
		}
		
	}
	
});

/*
	next player turn
*/

function nextPlayer(player){

	player === "one" ? player = "two" : player = "one";
	roundScore = 0;
	document.getElementById('round-score-one').innerHTML = 0;
	document.getElementById('round-score-two').innerHTML = 0;

	document.querySelector('.player-panel-one').classList.toggle('active');
	document.querySelector('.player-panel-two').classList.toggle('active');

}

//button
document.querySelector('.hold-score').addEventListener('click',function(){

	//update final score using score array
	if(activePlayer === 'one'){
		activePlayer = 0;
		scores[activePlayer] += roundScore;
		//console.log(activePlayer);
		//update final score UI
		document.getElementById('total-score-one').textContent = scores[activePlayer];
		//check for winner if(score[activePlayer] >= 20) else continue
		checkWinner(scores[activePlayer]);
	} else if(activePlayer === 'two')
		activePlayer = 1;
		scores[activePlayer] += roundScore;
		//console.log(activePlayer);
		//update final score UI
		document.getElementById('total-score-two').textContent = scores[activePlayer];
		//check for winner if(score[activePlayer] >= 20) else continue
		checkWinner(scores[activePlayer]);
});


document.querySelector('.new-game').addEventListener('click',function(){
	initNewGame();
});

console.log(roundScore);

/*
	check for winner
*/

function checkWinner(finalScore){
	if(finalScore >= 20){
		if(activePlayer === 1){
			document.getElementById('player-name-two').textContent = 'Winner';
			document.getElementById('total-score-one').textContent = 0;
		} else {
			document.getElementById('player-name-one').textContent = 'Winner';
			document.getElementById('total-score-two').textContent = 0;
		}
	} else {
		if(activePlayer === 0){
			activePlayer = 'one'
			nextPlayer(activePlayer);
		} else if(activePlayer === 1){
			activePlayer = 'two'
			nextPlayer(activePlayer);
		}
	}
}
/*
	initialises the game with all the score set to 0
*/
function initNewGame(){

	activePlayer = "one";

	scores = [0,0]

	roundScore = 0;

	document.getElementById('total-score-one').innerHTML = 0;
	document.getElementById('total-score-two').innerHTML = 0;
	document.getElementById('round-score-one').innerHTML = 0;
	document.getElementById('round-score-two').innerHTML = 0;

	document.getElementById('player-name-one').innerHTML = "Player 1";
	document.getElementById('player-name-two').innerHTML = "Player 2";

	document.querySelector('.player-panel-one').classList.remove('active');
	document.querySelector('.player-panel-one').classList.remove('active');

	document.querySelector('.player-panel-one').classList.add('active');
}
