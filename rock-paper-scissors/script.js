const btnOne = document.getElementById('btnOne');
const btnTwo = document.getElementById('btnTwo');
const btnThree = document.getElementById('btnThree');
const roundOutput = document.getElementById('roundOutput');
const gameScore = document.getElementById('gameScore');
const resetButton = document.createElement('button');
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "rock";
  } else if (randomNumber == 1) {
    return "paper"
  } else {
    return "knife";
  }
}

btnOne.addEventListener('click', function (event) {
  playerSelection = "rock";
  computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

btnTwo.addEventListener('click', function (event) {
  playerSelection = "paper";
  computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

});

btnThree.addEventListener('click', function (event) {
  playerSelection = "knife";
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

btnFour.addEventListener('click', function (event) {
  resetGame();
});


function playRound(playerSelection, computerSelection) {
  
  if (computerSelection == playerSelection){
    roundOutput.textContent = `It's a tie. You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    gameScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

  } else if (computerSelection == "rock" && playerSelection == "knife" ) {
    computerScore++;
    gameScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    roundOutput.textContent = "You lose. Rock beats Knife.";

  } else if (computerSelection == "rock" && playerSelection == "paper" ) {
    playerScore++;
    gameScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    roundOutput.textContent = "You win. Paper beats rock.";

  } else if (computerSelection == "paper" && playerSelection == "knife" ) {
    playerScore++;
    gameScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    roundOutput.textContent = "You win. Knife beats paper.";

  } else if (computerSelection == "paper" && playerSelection == "rock" ) {
    computerScore++;
    gameScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    roundOutput.textContent = "You lose. Paper beats rock.";

  } else if (computerSelection == "knife" && playerSelection == "rock" ) {
    playerScore++;
    gameScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    roundOutput.textContent = "You win. Rock beats knife.";

  } else if (computerSelection == "knife" && playerSelection == "paper" ) {
    computerScore++;
    gameScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    roundOutput.textContent = "You lose. Knife beats paper.";

  } else {
    gameScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    roundOutput.textContent = `You chose ${playerSelection}, you dummy. No idea who wins.`;

  }

  if (computerScore > 4){
    runWinnerComputer();
  } else if (playerScore > 4) {
    runWinnerPlayer();
  } else {
  }

}

function runWinnerComputer(){
  gameScore.style.color = "red";
  gameScore.textContent = "You lose! Bad job...";
  roundOutput.textContent = "You lost to a random algorithm...";

  btnFour.style = "display: unset;";
}

function runWinnerPlayer(){
  gameScore.style.color = "green";
  gameScore.textContent = "You Won! Good Job!!!";
  roundOutput.textContent = "Sweet deal. Computer is no match for the man.";

  btnFour.style = "display: unset;";
}

function resetGame(){
  gameScore.style.color = "black";
  playerScore = 0;
  computerScore = 0;
  roundOutput.textContent = "No rounds played yet.";
  gameScore.textContent = "Player: 0 Computer: 0";
  btnFour.style = "display: none;";

}

