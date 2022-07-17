"use strict";
exports.__esModule = true;
var PriorityQueue_1 = require("./PriorityQueue");
var priority = new PriorityQueue_1.PriorityQueue();
var priority1 = new PriorityQueue_1.PriorityQueue();
priority.enqueue('Ngoc', 1);
priority.enqueue('Minh', 2);
// console.log(priority);
priority.enqueue('Ngo', 3);
priority.enqueue('Thao', 4);
console.log(priority);
priority.dequeue();
console.log(priority);
// console.log(priority.dequeue());
// //
// // console.log(priority1)
console.log(priority.dequeue());
