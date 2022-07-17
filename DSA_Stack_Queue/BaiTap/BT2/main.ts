import {Stack} from "./Stack";

let stack = new Stack<number>();

let array = [1,2,3,4,5];

for (let i = 0; i < array.length; i++) {
    stack.push(array[i]);
}

console.log(stack)


for (let i = 0; i < array.length; i++) {
    array[i] = stack.pop();
}
// while (stack.getSize() >= 0) {
//     console.log(stack.top());
//     stack.pop();
// }
console.log(array)