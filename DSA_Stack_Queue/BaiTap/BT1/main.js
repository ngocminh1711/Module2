"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
var str = "able was I ere I saw elba";
var queue = new Queue_1.Queue();
var stack = new Stack_1.Stack();
var str1 = "abla was I ere I saw elba";
// add str to queue
for (var i = 0; i < str.length; i++) {
    queue.enqueue(str[i]);
}
//add str to stack
for (var i = 0; i < str.length; i++) {
    stack.push(str1[i]);
}
console.log(stack);
console.log(queue);
var newQueueStr = [];
for (var i = 0; i < str.length; i++) {
    newQueueStr.push(queue.dequeue());
}
// console.log(newQueueStr)
var newStackStr = [];
for (var i = 0; i < str.length; i++) {
    newStackStr.push(stack.pop());
}
// console.log(newStackStr)
function compareQueueAndStack(newQueueStr, newStackStr) {
    var flag = true; // flag = true => 2 mảng đối xứng
    if (newQueueStr.length !== newStackStr.length)
        return flag = false;
    for (var i = 0; i < newQueueStr.length; i++) {
        if (newQueueStr[i] !== newStackStr[i]) {
            return flag = false;
        }
    }
    for (var i = 0; i < newQueueStr.length; i++) {
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
