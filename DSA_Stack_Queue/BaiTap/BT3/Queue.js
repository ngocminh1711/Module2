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
        if (this.isEmpty()) {
            return null;
        }
        var min = this.container[0];
        var minIndex = -1;
        this.container.forEach(function (data, index) {
            if (data[0] < min[0]) {
                min = data;
                minIndex = index;
            }
        });
        this.container.splice(minIndex, 1);
        return min[1];
    };
    Queue.prototype.isEmpty = function () {
        return this.container.length === 0;
    };
    return Queue;
}());
exports.Queue = Queue;
