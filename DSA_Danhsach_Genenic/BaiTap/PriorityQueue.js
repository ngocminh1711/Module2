"use strict";
exports.__esModule = true;
exports.PriorityQueue = void 0;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.data = [];
    }
    PriorityQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return null;
        }
        var min = this.data[0];
        var minIndex = -1;
        this.data.forEach(function (item, index) {
            if (item[0] < min[0]) {
                min = item;
                minIndex = index;
            }
        });
        this.data.splice(minIndex, 1);
        return min[1];
    };
    PriorityQueue.prototype.enqueue = function (item, priority) {
        this.data.push([priority, item]);
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    PriorityQueue.prototype.size = function () {
        return this.data.length;
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
