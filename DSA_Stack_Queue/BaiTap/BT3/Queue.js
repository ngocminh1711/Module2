"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this.container = [];
    }
    enqueue(data) {
        this.container.push(data);
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        let min = this.container[0];
        let minIndex = -1;
        this.container.forEach((data, index) => {
            if (data[0] < min[0]) {
                min = data;
                minIndex = index;
            }
        });
        this.container.splice(minIndex, 1);
        return min[1];
    }
    isEmpty() {
        return this.container.length === 0;
    }
}
exports.Queue = Queue;
