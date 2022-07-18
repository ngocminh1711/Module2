"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(month, money) {
        this.next = null;
        this.month = month;
        this.money = money;
    }
    readData() {
        return { month: this.month, money: this.money };
    }
    getMoney() {
        return this.money;
    }
    getMonth() {
        return this.month;
    }
}
exports.Node = Node;
