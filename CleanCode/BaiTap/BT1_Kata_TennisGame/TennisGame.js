"use strict";
exports.__esModule = true;
exports.TennisGame = void 0;
var TennisGame = /** @class */ (function () {
    function TennisGame() {
        this.score = '';
    }
    TennisGame.prototype.getScoreGame = function (scorePlayerOne, scorePlayerTwo) {
        var tempScore = 0;
        if (scorePlayerOne == scorePlayerTwo) {
            this.checkDraw(scorePlayerOne);
        }
        else if (scorePlayerOne >= 4 || scorePlayerTwo >= 4) {
            this.checkWin(scorePlayerOne, scorePlayerTwo);
        }
        else {
            this.checkScore(tempScore, scorePlayerOne, scorePlayerTwo);
        }
    };
    TennisGame.prototype.checkScore = function (tempScore, scorePlayerOne, scorePlayerTwo) {
        for (var i = 1; i < 3; i++) {
            if (i == 1)
                tempScore = scorePlayerOne;
            else {
                this.score += "-";
                tempScore = scorePlayerTwo;
            }
            switch (tempScore) {
                case 0:
                    this.score += "Love";
                    break;
                case 1:
                    this.score += "Fifteen";
                    break;
                case 2:
                    this.score += "Thirty";
                    break;
                case 3:
                    this.score += "Forty";
                    break;
            }
        }
    };
    TennisGame.prototype.checkDraw = function (scorePlayerOne) {
        switch (scorePlayerOne) {
            case 0:
                this.score = "Love-All";
                break;
            case 1:
                this.score = "Fifteen-All";
                break;
            case 2:
                this.score = "Thirty-All";
                break;
            case 3:
                this.score = "Forty-All";
                break;
            default:
                this.score = "Deuce";
                break;
        }
    };
    TennisGame.prototype.checkWin = function (scorePlayerOne, scorePlayerTwo) {
        var minusResult = scorePlayerOne - scorePlayerTwo;
        if (minusResult == 1)
            this.score = "Advantage player1";
        else if (minusResult == -1)
            this.score = "Advantage player2";
        else if (minusResult >= 2)
            this.score = "Win for player1";
        else
            this.score = "Win for player2";
    };
    return TennisGame;
}());
exports.TennisGame = TennisGame;
