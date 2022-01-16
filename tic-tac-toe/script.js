/* PsuedoCode :
1. Game is initialized with an empty board
2. Player 1 clicks on a square
3. An X is populated on the gameboard
4. Player 2 clicks on a square
5. An O is populated on the gameboard
Repeat 2-5 Until either
  A. The game recognizes a winner
  B. The game recognizes a draw
6. Declare either a winner, or a draw
7. Player clicks restart
8. The gameboard is cleared, and the process restarts
*/


// --------------- Testing/Dev Code Section ---------------
/*

Thinking about how the array is going to be layed out / interact with the code

let gameArray = [];

Array squares have numbers from 1 to 9, L to R, T to B
So It's layed out like this

[ 1, 2, 3, 
  4, 5, 6,
  7, 8, 9
]

But each of these will be EMPTY, X, or O

[ X, O, X, 
  O, X, O,
  X, O, X
]

Player 1 clicks index 1, populate index 1 with X - So on. 


*/
// --------------- End Testing/Dev Code Section ---------------

// Gameboard Array (Module)
const gameBoard = (() => {

  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  const initializeGameboard = (x) => {
    log("Initializing Gameboard");
    return x;
  };

  return {
    initializeGameboard
  }
})();

console.log(gameBoard.initializeGameboard("Initializing Gameboard"));

// DisplayController (Module)
const displayController = (() => {

  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  const updateGameboard = (x) => {
    log("Updating gameboard");
    return x;
  };

  const restartGame = (x) => {
    log("Restarting game");
    return x;
  };

  return {
    updateGameboard,
    restartGame
  }
})();

console.log(displayController.updateGameboard("Updating Gameboard"));
console.log(displayController.restartGame("Restarting Game"));

// Player (Factory)
const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName  = () => name;
  const damage = x => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = enemy => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return {attack, damage, getLevel, getName}
};



