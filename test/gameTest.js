let assert = require("assert");
let Game = require("../public/js/game.js");
let Player = require("../public/js/player.js");
let SnakeAndLadders = require("../public/js/player.js");
let test = {};
exports.test = test;

test["addPlayer() should add player"] = function(){
  let game = new Game();
  let player = new Player("Praveen","*");
  game.addPlayer(player)
  assert.equal(game.players[0].currentPosition,0);
  assert.equal(game.players[0].name,"Praveen");
  assert.equal(game.players[0].symbol,"*");
};

test["updateCurrentPosition() should update current player position"] = function(){
  let game = new Game();
  let player = new Player("Praveen","*");
  game.addPlayer(player);
  game.updateCurrentPosition(4);
  assert.equal(player.currentPosition, 4);
};

test["getUpdate() should update current player position"] = function(){
  let game = new Game();
  let player1 = new Player("Praveen","*");
  game.addPlayer(player1);
  assert.equal(game.getUpdate(player1), "Praveen turn");
}

test["hasPlayerWon() should update current player position"] = function(){
  let game = new Game();
  let player1 = new Player("Praveen","*");
  game.addPlayer(player1);
  assert.ok(!game.hasPlayerWon(player1));
}
