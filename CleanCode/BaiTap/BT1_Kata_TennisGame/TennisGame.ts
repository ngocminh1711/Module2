
export class TennisGame {
    score: string = '';

    getScoreGame(scorePlayerOne: number,
             scorePlayerTwo: number) {
        let tempScore = 0;

        if (scorePlayerOne == scorePlayerTwo) {
            this.checkDraw(scorePlayerOne);
        } else if (scorePlayerOne >= 4 || scorePlayerTwo >= 4) {
            this.checkWin(scorePlayerOne, scorePlayerTwo);
        } else {
            this.checkScore(tempScore, scorePlayerOne, scorePlayerTwo);
        }
    }

    private checkScore(tempScore: number, scorePlayerOne: number, scorePlayerTwo: number) {
        for (let i = 1; i < 3; i++) {
            if (i == 1) tempScore = scorePlayerOne;
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
    }

    private checkDraw(scorePlayerOne: number) {
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
    }

    private checkWin(scorePlayerOne: number, scorePlayerTwo: number) {
        let minusResult = scorePlayerOne - scorePlayerTwo;
        if (minusResult == 1) this.score = "Advantage player1";
        else if (minusResult == -1) this.score = "Advantage player2";
        else if (minusResult >= 2) this.score = "Win for player1";
        else this.score = "Win for player2";
    }
}