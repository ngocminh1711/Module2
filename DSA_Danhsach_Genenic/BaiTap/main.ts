import {PriorityQueue} from "./PriorityQueue";

let priority = new PriorityQueue();
let priority1 = new PriorityQueue();
priority.enqueue('Ngoc',1);
priority.enqueue('Minh',2);
// console.log(priority);

priority.enqueue('Ngo',3);
priority.enqueue('Thao',4);
console.log(priority);
priority.dequeue()
console.log(priority);
// console.log(priority.dequeue());
// //
// // console.log(priority1)
console.log(priority.dequeue());

