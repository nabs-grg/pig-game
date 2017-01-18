var activePlayer, scoreOne, scoreTwo, roundScore, gamePlaying, previousScore;

initNewGame();

document.querySelector('.roll-dice').addEventListener('click',function(){
	if(gamePlaying === true){
		//dice score from 1 to 6
		var diceScore = (Math.floor(Math.random() * 6) + 1);

		document.getElementById("dice").src = "./img/dice-" + diceScore + ".png";

		console.log(diceScore);

		//Check if dice score equal to 1, if its equal to one than the round score for the active player is equal to 0
		//if the previous dice is equal to 6 and the current dice is 6 than the player's total score = 0
		if(previousScore === 6 && diceScore === 6){

			document.querySelector('#round-score-' + activePlayer ).innerHTML = 0;
			document.querySelector('#total-score-' + activePlayer ).innerHTML = 0;
			nextPlayer();

		} else if(diceScore !== 1){

			roundScore += diceScore ;
			document.querySelector('#round-score-' + activePlayer ).innerHTML = roundScore;
			
		} else {
			
			nextPlayer();
			
		}

		previousScore = diceScore;
	}	
});

/*
	next player turn
*/

function nextPlayer(){

	activePlayer === "one" ? activePlayer = "two" : activePlayer = "one";
	roundScore = 0;
	previousScore = 0;
	document.getElementById('round-score-one').innerHTML = 0;
	document.getElementById('round-score-two').innerHTML = 0;

	document.querySelector('.player-panel-one').classList.toggle('active');
	document.querySelector('.player-panel-two').classList.toggle('active');
	console.log(activePlayer);
}

//button
document.querySelector('.hold-score').addEventListener('click',function(){

	if(gamePlaying === true){
		//update final score using score array
		if(activePlayer === 'one'){
			
			scoreOne += roundScore;
			
			//update final score UI
			document.getElementById('total-score-one').textContent = scoreOne;
			
			//check for winner if(score[activePlayer] >= 20) else continue
			if(scoreOne >= 20){
				document.getElementById('player-name-one').textContent = 'Winner';
	 			gamePlaying = false;
			} else {
				nextPlayer();
			}

		} else if(activePlayer === 'two'){
			
			scoreTwo += roundScore;
			
			//update final score UI
			document.getElementById('total-score-two').textContent = scoreTwo;
			
			//check for winner if(score[activePlayer] >= 20) else continue
			if(scoreTwo >= 20){
				document.getElementById('player-name-two').textContent = 'Winner';
				gamePlaying = false;
			}else {
				nextPlayer();
			}
		}
	}
	
});


document.querySelector('.new-game').addEventListener('click',function(){
	initNewGame();
});

console.log(roundScore);

/*
	initialises the game with all the score set to 0
*/
function initNewGame(){

	activePlayer = "one";

	scoreOne = 0;
	scoreTwo = 0;

	roundScore = 0;

	gamePlaying = true;

	previousScore = 0;

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

/*
function checkWinner(){
	if(scoreOne >= 20){
		document.getElementById('player-name-one').textContent = 'Winner';
		//document.getElementById('total-score-one').textContent = 0;
	} else {
		nextPlayer();
	}

	if(scoreTwo >= 20){
		document.getElementById('player-name-two').textContent = 'Winner';
		//document.getElementById('total-score-two').textContent = 0;
	}else {
		nextPlayer();
	}
}

*/
