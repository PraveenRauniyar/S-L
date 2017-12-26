
let game = new Game();
let player1 = new Player("PLAYER 1", "image/yellow.jpg");
let player2 = new Player("PLAYER 2", "image/green1.jpg");
game.addPlayer(player1);
game.addPlayer(player2);
let snakeAndLadders = new SnakeAndLadders();

const stopGame = function() {
  document.getElementById("button").onclick = null;
};

const showTurn = function(nextPlayer) {
  document.getElementById("update").innerText = game.getUpdate(nextPlayer);
};

const announceWinner = function(playerName) {
  document.getElementById("update").innerText = `${playerName} has won the game `
};

const updateCurrentPlayerSymbol = function(currentPlayerSymbol, newPosition) {
  let image = document.createElement('img');
  image.src = currentPlayerSymbol;
  image.width = "80";
  image.height = "80";
  document.getElementById(newPosition).appendChild(image);
};

const showDiceValue = function(diceValue) {
  document.getElementById("display").innerText = diceValue;
};

const alertAtSnakeAndLadder = function(newPosition) {
  document.getElementById("snakeAndLadderPosition").innerText = snakeAndLadders.alertAtSnakeAndLadder(newPosition);
};
const alertAtWin = function functionName(currentPlayer) {
  if (game.hasPlayerWon(currentPlayer)) {
    announceWinner(currentPlayer.name);
    stopGame();
  };
};

const removeLastSymbol = function(lastPosition) {
  document.getElementById(lastPosition).innerText = "";
};


const updateDisplay = function(game, diceValue, currentPlayer, newPosition) {
  showTurn(game.players[game.index].name);
  showDiceValue(diceValue);
  updateCurrentPlayerSymbol(currentPlayer.symbol, currentPlayer.currentPosition);
  alertAtSnakeAndLadder(newPosition);
  alertAtWin(currentPlayer);
};

const actionOnRollDice = function() {
  let currentPlayer = game.players[game.index];
  let diceValue = game.getRandomDiceValue();
  if (currentPlayer.currentPosition > 0) {
    removeLastSymbol(currentPlayer.currentPosition);
  }
  game.updateCurrentPosition(diceValue);
  let newPosition = currentPlayer.currentPosition;
  currentPlayer.currentPosition = game.changePositionAtSnakeAndLadder(newPosition);
  if (diceValue != 6) {
    game.index = 1 - game.index;
  };
  updateDisplay(game, diceValue, currentPlayer, newPosition);
};
