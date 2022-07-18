"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
class PriorityQueue {
    constructor() {
        this.data = [];
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        let min = this.data[0];
        let minIndex = -1;
        this.data.forEach((item, index) => {
            if (item[0] < min[0]) {
                min = item;
                minIndex = index;
            }
        });
        this.data.splice(minIndex, 1);
        return min[1];
    }
    enqueue(item, priority) {
        this.data.push([priority, item]);
    }
    isEmpty() {
        return this.data.length === 0;
    }
    size() {
        return this.data.length;
    }
}
exports.PriorityQueue = PriorityQueue;
