// Player Factory
const Player = (mark) => {
  this.mark = mark;

  const getMark = () => {
    return mark;
  };

  return {
    getMark,
  };

}

// Gameboard Module
const Gameboard = (() => {
  let gamesquares = document.querySelectorAll('td');

  let gameArray = ['', '', '', '', '', '', '', '', ''];

  const updateArray = () => {
    gamesquares.forEach(square = (value, i) => {
      gameArray[i] = value.textContent;
  });

  };

  return {
    gameArray,
    updateArray,
  };

})();

// GameFlow Module
const Game = (() => {
  const playerX = Player('X');
  const playerO = Player('O');
  let winner = '';
  let squares = document.querySelectorAll('td');
  let round = 0;
  let currentPlayerMark;
  const restartButton = document.getElementById('restart');

  restartButton.addEventListener('click', (e) => {
    DisplayController.updateStatus('New Game. X\'s Turn.');
    Game.restart();
    DisplayController.updateSquares(['', '', '', '', '', '', '', '', '']);
  });

  squares.forEach(square => square.addEventListener('click',
  (e) => {playRound(square);}
  ));

  const playRound = (square) => {
    if (round >= 9 || square.textContent !== '' || winner !== ''){
      return;
    } else if (round % 2 === 0 && square.textContent === ''){
      currentPlayerMark = playerX.getMark();
      square.textContent = currentPlayerMark;
      DisplayController.updateStatus('It\'s O\'s turn.');
      round++;
    } else {
      currentPlayerMark = playerO.getMark();
      square.textContent = currentPlayerMark;
      DisplayController.updateStatus('It\'s X\'s turn.');
      round++;
    }
    Gameboard.updateArray();
    Game.evaluate();
  };

  const evaluate = () => {
    let winningArrays = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    for (let i = 0; i < winningArrays.length; i++) {

      let combination = winningArrays[i];

      let s1 = Gameboard.gameArray[combination[0]];
      let s2 = Gameboard.gameArray[combination[1]];
      let s3 = Gameboard.gameArray[combination[2]];

      if (s1 !== '') {
        if (s1 == s2 
         && s1 == s3) {
          winner = s1;
         }
      }
    }

    if (winner == 'O' || winner == 'X'){
      DisplayController.updateStatus(`Game Over. ${winner} wins.`);
      return;
    }
    else if (round >= 9 && winner == '') {
      DisplayController.updateStatus('Game Over. It is a tie.');
      return;
    } else {
      return;
    }
  };

  const restart = () => {
    round = 0;
    winner = '';
  };

  return {
    restart,
    playRound,
    evaluate
  }

})();

// DisplayController Module
const DisplayController = (() => {
  let status = document.getElementById('status');
  let squares = document.querySelectorAll('td');

  const updateStatus = (message) => {
    status.textContent = message; 
  };

  const updateSquares = () => {
      for (i = 0; i < squares.length; i++){
      squares[i].textContent = '';
    }
  };

  return {
    updateStatus,
    updateSquares,
  };

})();

