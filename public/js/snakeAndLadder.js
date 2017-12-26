const SnakeAndLadders = function () {
  this.snakeStartPosition = [23, 33, 44, 68, 77, 94, 97];
  this.snakeEndPosition = [7, 9, 14, 25, 41, 70, 66];
  this.ladderStartPosition = [5, 13, 18, 37, 48, 60, 65];
  this.ladderEndPosition = [26, 46, 39, 62, 72, 82, 95];
};

SnakeAndLadders.prototype.isPositionAtSnake = function(currentPosition) {
  return this.snakeStartPosition.includes(currentPosition);
};

SnakeAndLadders.prototype.getNewPositionAtSnake = function(currentPosition) {
  let indexOfCurrentPosition = this.snakeStartPosition.indexOf(currentPosition);
  return this.snakeEndPosition[indexOfCurrentPosition];
};

SnakeAndLadders.prototype.isPositionAtLadder = function(currentPosition) {
  return this.ladderStartPosition.includes(currentPosition);
}

SnakeAndLadders.prototype.getNewPositionAtLadder = function(currentPosition) {
  let indexOfCurrentPosition = this.ladderStartPosition.indexOf(currentPosition);
  return this.ladderEndPosition[indexOfCurrentPosition];
};

SnakeAndLadders.prototype.alertAtSnakeAndLadder = function(currentPosition) {
  if (this.snakeStartPosition.includes(currentPosition)) {
    return "Ohhh! Bad Luck Snake Caught You. ";
  }
  if (this.ladderStartPosition.includes(currentPosition)) {
    return "Wow Great! You got the Ladder. ";
  } else {
    return "";
  };
};

module.exports = SnakeAndLadders;
