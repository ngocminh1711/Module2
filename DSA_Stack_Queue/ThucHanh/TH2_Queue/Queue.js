"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this.container = [];
    }
    enqueue(item) {
        this.container.push(item);
    }
    dequeue() {
        return this.container.shift();
    }
    getSize() {
        return this.container.length;
    }
}
exports.Queue = Queue;
