"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(name, score) {
        this.next = null;
        this.name = name;
        this.score = score;
    }
    getInfo() {
        return { name: this.name, score: this.score };
    }
    getScore() {
        return this.score;
    }
    getName() {
        return this.name;
    }
}
exports.Node = Node;
