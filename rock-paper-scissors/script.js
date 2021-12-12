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
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection == playerSelection){
    return `It's a tie. You chose ${playerSelection} and the computer chose ${computerSelection}.`;
  } else if (computerSelection == "rock" && playerSelection == "scissors" ) {
    computerScore++;
    return "You lose. Rock beats scissors.";

  } else if (computerSelection == "rock" && playerSelection == "paper" ) {
    playerScore++;
    return "You win. Paper beats rock.";

  } else if (computerSelection == "paper" && playerSelection == "scissors" ) {
    playerScore++;
    return "You win. Scissors beats paper.";

  } else if (computerSelection == "paper" && playerSelection == "rock" ) {
    computerScore++;
    return "You lose. Paper beats rock.";

  } else if (computerSelection == "scissors" && playerSelection == "rock" ) {
    playerScore++;
    return "You win. Rock beats scissors.";

  } else if (computerSelection == "scissors" && playerSelection == "paper" ) {
    computerScore++;
    return "You lose. Scissors beats paper.";

  } else {
    return `You chose ${playerSelection}, you dummy. No idea who wins.`;
  }
}

function game(){
  for (let i = 1; i <= 10; i++){
    if (playerScore == 3){
      console.log(" You win the best of 5");
      return;
    } else if (computerScore == 3){
      console.log("The computer wins the best of 5");
      return;
    } else {
    playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    console.log(`You chose ${playerSelection}`);
    console.log(`The computer chose ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    }
  }
}


game();