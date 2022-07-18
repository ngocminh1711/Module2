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
        return this.container.shift();
    }
}
exports.Queue = Queue;
