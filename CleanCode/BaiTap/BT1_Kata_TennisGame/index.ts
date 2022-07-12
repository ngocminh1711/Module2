import {TennisGame} from "./TennisGame";
import {Player} from "./Player";

let playerOne = new Player('playerOne',6);
let playerTwo = new Player('playerTwo',8)

console.log(playerOne)

let tennisGame = new TennisGame();


tennisGame.getScoreGame(playerOne.getScore(), playerTwo.getScore())
console.log(tennisGame)