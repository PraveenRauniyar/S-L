
const Game = function() {
  this.players = [];
  this.index = 0;
};

Game.prototype.getRandomDiceValue = function() {
  return (Math.ceil(Math.random() * 6));
};

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
};

Game.prototype.getUpdate = function(player) {
  if (player.currentPosition == 100) {
    return (`${player.name} has won the game `);
  };
  let nextPlayerName = this.players[this.index].name;
  return `${nextPlayerName} turn`;
};

Game.prototype.hasPlayerWon = function(player) {
  return player.currentPosition == 100;
};

Game.prototype.updateCurrentPosition = function(diceValue) {
  let player = this.players[this.index];
  let newPosition = player.currentPosition + diceValue;
  if (newPosition <= 100) {
    player.currentPosition = newPosition;
  };
};

Game.prototype.changePositionAtSnakeAndLadder = function(currentPosition) {
  if (snakeAndLadders.isPositionAtSnake(currentPosition)) {
    currentPosition = snakeAndLadders.getNewPositionAtSnake(currentPosition);
  };
  if (snakeAndLadders.isPositionAtLadder(currentPosition)) {
    currentPosition = snakeAndLadders.getNewPositionAtLadder(currentPosition);
  };
  return currentPosition;
};

module.exports = Game;
