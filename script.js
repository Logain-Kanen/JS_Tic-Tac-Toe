let gameBoard = document.getElementById("board");
let currentPlayer = "X";
let gameOver = false;
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function createTable() {
  gameBoard.innerHTML = "";
  let html = `<table>`;

  let cellCount = 0;
  for (let row = 0; row < board.length; row++) {
    html += `<tr>`;
    for (let col = 0; col < board[row].length; col++) {
      html += `<td id="c${cellCount}" onclick="play(this, ${row}, ${col})"></td>`;
      cellCount++;
    }
    html += `</tr>`;
  }
  html += `</table>`;
  gameBoard.innerHTML = html;
}
createTable();

function play(cell, row, col) {
  if (gameOver || cell.innerHTML != "") return;

  cell.innerHTML = currentPlayer;
  cell.classList.add(currentPlayer);

  board[row][col] = currentPlayer;

  if (checkWin()) {
    document.getElementById("status").textContent = `${currentPlayer} won!`;
    gameOver = true;
    return;
  }

  if (gameDraw()) {
    document.getElementById("status").textContent = "It's a draw!";
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer == "X" ? "O" : "X";
  document.getElementById("status").innerHTML = `${currentPlayer}'s turn`;
}

function checkWin() {
  // ROWS
  if (
    board[0][0] === currentPlayer &&
    board[0][1] === currentPlayer &&
    board[0][2] === currentPlayer
  )
    return true;

  if (
    board[1][0] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[1][2] === currentPlayer
  )
    return true;

  if (
    board[2][0] === currentPlayer &&
    board[2][1] === currentPlayer &&
    board[2][2] === currentPlayer
  )
    return true;

  // COLS
  if (
    board[0][0] === currentPlayer &&
    board[1][0] === currentPlayer &&
    board[2][0] === currentPlayer
  )
    return true;
  if (
    board[0][1] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][1] === currentPlayer
  )
    return true;
  if (
    board[0][2] === currentPlayer &&
    board[1][2] === currentPlayer &&
    board[2][2] === currentPlayer
  )
    return true;

  //DIAGONALS

  if (
    board[0][0] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][2] === currentPlayer
  )
    return true;

  if (
    board[0][2] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][0] === currentPlayer
  )
    return true;

  return false;
}

function gameDraw() {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] == "") return false;
    }
  }
  return true;
}

function reset() {
  currentPlayer = "X";
  gameOver = false;
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  document.getElementById("status").innerHTML = `${currentPlayer}'s turn`;
  createTable();
}
