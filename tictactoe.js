var squares = document.getElementsByTagName("td");
var status = document.getElementById("status");

var player = "X";
var winner = null;

function setSquare(square) {
  if (square.innerHTML !== "") {
    return;
  }
  square.innerHTML = player;
  square.classList.add("selected");
  if (checkForWinner(player)) {
    status.innerHTML = player + " wins!";
    document.write('hey u r winner'  ,player)
    winner = player;
    highlightWinnerSquares();
  } else if (checkForDraw()) {
    status.innerHTML = "It's a draw!";
  } else {
    player = player === "X" ? "O" : "X";
    status.innerHTML = player + "'s turn";
  }
}

function checkForWinner(player) {
  var winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // diagonal
  ];
  return winningCombinations.some(function(combination) {
    return combination.every(function(squareIndex) {
      return squares[squareIndex].innerHTML === player;
    });
  });
}

function checkForDraw() {
  return Array.prototype.every.call(squares, function(square) {
    return square.innerHTML !== "";
  });
}

function highlightWinnerSquares() {
  var winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // diagonal
  ];
  winningCombinations.forEach(function(combination) {
    var isWinner = combination.every(function(squareIndex) {
      return squares[squareIndex].innerHTML === winner;
    });
    if (isWinner) {
      combination.forEach(function(squareIndex) {
        squares[squareIndex].classList.add("winner");
      });
    }
  });
}

Array.prototype.forEach.call(squares, function(square) {
  square.addEventListener("click", function() {
    if (winner !== null) {
        return;
    
      }
      setSquare(square);
    //   document.write('you are a Winner',setSquare) 
    });
  });









