"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_1 = require("./Stack");
let stack = new Stack_1.Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack);
stack.pop();
console.log(stack);
console.log(stack.pop());
