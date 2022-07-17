"use strict";
exports.__esModule = true;
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(month, money) {
        this.next = null;
        this.month = month;
        this.money = money;
    }
    Node.prototype.readData = function () {
        return { month: this.month, money: this.money };
    };
    Node.prototype.getMoney = function () {
        return this.money;
    };
    Node.prototype.getMonth = function () {
        return this.month;
    };
    return Node;
}());
exports.Node = Node;
