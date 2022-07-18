"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    getScore() {
        return this.score;
    }
}
exports.Player = Player;
