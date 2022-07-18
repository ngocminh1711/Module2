"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TennisGame_1 = require("./TennisGame");
const Player_1 = require("./Player");
let playerOne = new Player_1.Player('playerOne', 6);
let playerTwo = new Player_1.Player('playerTwo', 8);
console.log(playerOne);
let tennisGame = new TennisGame_1.TennisGame();
tennisGame.getScoreGame(playerOne.getScore(), playerTwo.getScore());
console.log(tennisGame);
