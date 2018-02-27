var newGame,rollDice,hold,activePlayer,roundScore,gamePlaying,scores,maxScore,newScore;
maxScore=0;
startNewGame();

newGame=document.getElementById("newGame");
newGame.addEventListener("click",startNewGame);

rollDice = document.getElementById("rollDiceButt");
rollDice.addEventListener("click",draw);

hold = document.getElementById("holdButt");
hold.addEventListener("click",brake);

newScore = document.getElementById("submit-max-score");
newScore.addEventListener("click",enterNewScore);

function startNewGame(){
	document.getElementById("score0").textContent = "0";
	document.getElementById("score1").textContent = "0";
	document.getElementById("currNum0").textContent = "0";
	document.getElementById("currNum1").textContent = "0";
	document.getElementById("dice1").style.display = "none";
	document.getElementById("dice2").style.display = "none";
	document.querySelector(".player0-window").classList.add("active");
	document.querySelector(".player1-window").classList.remove("active");
	document.getElementById("player_name0").textContent="Player 1";
	document.getElementById("player_name1").textContent="Player 2";
	document.querySelector(".player0-window").classList.remove("winner");
	document.querySelector(".player1-window").classList.remove("winner");
	scores=[0,0];
	roundScore=0;
	activePlayer=0;
	gamePlaying=true;
	
	
}

function draw(){
if(gamePlaying){
document.getElementById("dice1").style.display = "block";
document.getElementById("dice2").style.display = "block";
var dice=Math.floor(Math.random()*6)+1;
var dice1=Math.floor(Math.random()*6)+1;
roundScore+=dice+dice1;
if(dice != 1 && dice1 != 1) {
	document.getElementById("currNum"+activePlayer).textContent = roundScore;
	document.getElementById("dice1").src="images/dice-"+dice+".png";
	document.getElementById("dice2").src="images/dice-"+dice1+".png";
}
else{
	roundScore=0;
	brake();

}
}
}

function brake(){
	if(gamePlaying){
	scores[activePlayer]+=roundScore;
	document.getElementById("score"+activePlayer).textContent = scores[activePlayer];
	roundScore=0;
	document.getElementById("currNum"+activePlayer).textContent = "0";
	document.querySelector(".player0-window").classList.toggle("active");
	document.querySelector(".player1-window").classList.toggle("active");
	document.getElementById("dice1").style.display = "none";
	document.getElementById("dice2").style.display = "none";
	if(scores[activePlayer]>=maxScore){
		document.querySelector(".player"+activePlayer+"-window").classList.add("winner");
		document.getElementById("player_name"+activePlayer).textContent="Winner!";
		document.querySelector(".player0-window").classList.remove("active");
		document.querySelector(".player1-window").classList.remove("active");
		gamePlaying=false;
	}
	
	if (activePlayer === 0){activePlayer=1}
	else{activePlayer=0}
		

}
}

function enterNewScore(){
	maxScore=document.getElementById("max-score").value;
	document.getElementById("max-score").value="";
}