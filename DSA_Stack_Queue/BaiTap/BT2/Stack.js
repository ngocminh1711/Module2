"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this.container = [];
    }
    push(item) {
        this.container.push(item);
    }
    pop() {
        return this.container.pop();
    }
    getSize() {
        return this.container.length;
    }
}
exports.Stack = Stack;
