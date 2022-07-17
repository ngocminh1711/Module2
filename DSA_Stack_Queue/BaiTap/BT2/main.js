"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
var array = [1, 2, 3, 4, 5];
for (var i = 0; i < array.length; i++) {
    stack.push(array[i]);
}
console.log(stack);
for (var i = 0; i < array.length; i++) {
    array[i] = stack.pop();
}
// while (stack.getSize() >= 0) {
//     console.log(stack.top());
//     stack.pop();
// }
console.log(array);
