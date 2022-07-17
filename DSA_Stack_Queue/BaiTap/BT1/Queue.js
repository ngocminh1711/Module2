"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.container = [];
    }
    Queue.prototype.enqueue = function (data) {
        this.container.push(data);
    };
    Queue.prototype.dequeue = function () {
        return this.container.shift();
    };
    return Queue;
}());
exports.Queue = Queue;
