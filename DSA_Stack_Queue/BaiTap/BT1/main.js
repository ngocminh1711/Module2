"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_1 = require("./Stack");
const Queue_1 = require("./Queue");
let str = "able was I ere I saw elba";
let queue = new Queue_1.Queue();
let stack = new Stack_1.Stack();
let str1 = "abla was I ere I saw elba";
// add str to queue
for (let i = 0; i < str.length; i++) {
    queue.enqueue(str[i]);
}
//add str to stack
for (let i = 0; i < str.length; i++) {
    stack.push(str1[i]);
}
console.log(stack);
console.log(queue);
let newQueueStr = [];
for (let i = 0; i < str.length; i++) {
    newQueueStr.push(queue.dequeue());
}
// console.log(newQueueStr)
let newStackStr = [];
for (let i = 0; i < str.length; i++) {
    newStackStr.push(stack.pop());
}
// console.log(newStackStr)
function compareQueueAndStack(newQueueStr, newStackStr) {
    let flag = true; // flag = true => 2 mảng đối xứng
    if (newQueueStr.length !== newStackStr.length)
        return flag = false;
    for (let i = 0; i < newQueueStr.length; i++) {
        if (newQueueStr[i] !== newStackStr[i]) {
            return flag = false;
        }
    }
    for (let i = 0; i < newQueueStr.length; i++) {
        if (newQueueStr[i] !== newStackStr[i]) {
            return flag = false;
        }
    }
    return flag;
}
// console.log(compareQueueAndStack(newQueueStr, newStackStr))
function compare() {
    if (compareQueueAndStack(newQueueStr, newStackStr) === false) {
        return "Chuỗi không đối xứng";
    }
    else {
        return "Chuỗi đối xứng";
    }
}
console.log(compare());
// console.log(stack);
// console.log("----- queue -----")
// console.log(queue);
