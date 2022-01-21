const gameStatus = document.querySelector('.status');
let gameRunning = true;
let player = 'X';
let boardArray = ['', '', '', '', '', '', '', '', ''];
const winningArrays = 
[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


const winMessage = () => `${player} has won the game`;
const tieMessage = () => 'The game is a tie';
const playerTurn = () => `It is ${player}'s turn`;
gameStatus.innerHTML = playerTurn();

function playSquare(clickedSquare, clickedSquareIndex) {
  // Put the appropriate mark from player into the box
  boardArray[clickedSquareIndex] = player;
  clickedSquare.innerHTML = player;

}

function computerPlay(emptySquare) {
  emptySquare = Math.floor(Math.random() * 9);
}

function changePlayer() {
  // Set the player to the opposite mark
  player = player === "X" ? "O" : "X";
  // Update the current player message in the dom
  gameStatus.innerHTML = playerTurn();

}

function checkWinner() {
  // Run this every turn, stop the game and declare a winner if a winningCondition is met
  // Loop through the winning conditions / see if the current board has a winner, if not, continue the game
  // If none of the spots are empty, declare a draw

  let roundOver = false;
  for (let i = 0; i <= 7; i++) {
    const wonArray = winningArrays[i];
    let firstPosition = boardArray[wonArray[0]];
    let secondPosition = boardArray[wonArray[1]];
    let thirdPosition = boardArray[wonArray[2]];
    if (firstPosition === '' || secondPosition === '' || thirdPosition == ''){
      continue;
    }

    if (firstPosition === secondPosition && secondPosition === thirdPosition) {
      roundOver = true;
      break
    }
  }
  
  if (roundOver) {
      gameStatus.innerHTML = winMessage();
      gameRunning = false;
      return;
    }
   
  let tiedRound = !boardArray.includes('');
  if (tiedRound) {
    gameStatus.innerHTML = tieMessage();
      gameRunning = false;
      return;
  }


  changePlayer();
}

function updateSquare(clickedSquareEvent) {
  // Updates the square that was clicked in the backend

  const clickedSquare = clickedSquareEvent.target;

  //Turning the square clicked into a number for use in the array
  const clickedSquareIndex = parseInt(
    clickedSquare.getAttribute('data-index')
  );

  //if the board array is already clicked at the location or the game is over, return
  if (boardArray[clickedSquareIndex] !== '' || !gameRunning) {
    return;
  }

  playSquare(clickedSquare, clickedSquareIndex);
  checkWinner();
}

function restartGame() {
  // Set all of the game values back to the initial values
  gameRunning = true;
  player = 'X';
  boardArray = ['', '', '', '', '', '', '', '', ''];
  document.querySelectorAll('.square').forEach(square => square.textContent = '')

}

document.querySelectorAll('.square').forEach(square => square.addEventListener('click', updateSquare));
document.querySelector('.restart-button').addEventListener('click', restartGame);

/* PseudoCode: 

1. Initialize the game with winMessage, tieMessage, playerTurn, gameStatus, set game running to true, set the boardArray
2. Handle a click with playSquare
3. Update the square (in the DOM and in the backend) with UpdateSquare
4. Check if there's a winner with checkWinner
5. Change the current player to "O", repeat the process for "O"
6. Restart the game, setting player back to "X", boardArray to empty

*/