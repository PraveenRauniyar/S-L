let assert = require("assert");
let SnakeAndLadders = require("../public/js/snakeAndLadder.js");
let test = {};
exports.test = test;

test["isPositionAtSnake() should check whether position at snake or not"] = function(){
  let snakeAndLadders = new SnakeAndLadders();
  assert.ok(!snakeAndLadders.isPositionAtSnake(7));
  assert.ok(!snakeAndLadders.isPositionAtSnake(41));
  assert.ok(snakeAndLadders.isPositionAtSnake(68));
  assert.ok(snakeAndLadders.isPositionAtSnake(23));
  assert.ok(!snakeAndLadders.isPositionAtSnake(87));
};

test["getNewPositionAtSnake() should change position at snake and give valid position "] = function(){
  let snakeAndLadders = new SnakeAndLadders();
  assert.equal(snakeAndLadders.getNewPositionAtSnake(68),25);
  assert.equal(snakeAndLadders.getNewPositionAtSnake(23),7);
};

test["isPositionAtLadder() should check whether position at ladder or not"] = function(){
  let snakeAndLadders = new SnakeAndLadders();
  assert.ok(!snakeAndLadders.isPositionAtLadder(7));
  assert.ok(!snakeAndLadders.isPositionAtLadder(41));
  assert.ok(snakeAndLadders.isPositionAtLadder(37));
  assert.ok(snakeAndLadders.isPositionAtLadder(65));
  assert.ok(!snakeAndLadders.isPositionAtLadder(87));
};

test["getNewPositionAtLadder() should change position at ladder and give valid position"] = function(){
  let snakeAndLadders = new SnakeAndLadders();
  assert.equal(snakeAndLadders.getNewPositionAtLadder(5),26);
  assert.equal(snakeAndLadders.getNewPositionAtLadder(48),72);
};

test["alertAtSnakeAndLadder() should alert at snake o ladder starting position"] = function(){
  let snakeAndLadders = new SnakeAndLadders();
  assert.equal(snakeAndLadders.alertAtSnakeAndLadder(48),"Wow Great! You got the Ladder. ");
  assert.equal(snakeAndLadders.alertAtSnakeAndLadder(26),"");
  assert.equal(snakeAndLadders.alertAtSnakeAndLadder(72),"");
  assert.equal(snakeAndLadders.alertAtSnakeAndLadder(68),"Ohhh! Bad Luck Snake Caught You. ");

};
