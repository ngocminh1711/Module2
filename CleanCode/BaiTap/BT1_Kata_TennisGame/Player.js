"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(name, score) {
        this.name = name;
        this.score = score;
    }
    Player.prototype.getScore = function () {
        return this.score;
    };
    return Player;
}());
exports.Player = Player;
