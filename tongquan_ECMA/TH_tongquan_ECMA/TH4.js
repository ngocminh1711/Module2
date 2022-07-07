//b1
function multiply(a, b) {
    return a * b;
}

// let num1 = multiply(5);
// console.log(num1);
// let num2 = multiply(5,8)
// console.log(num2);

//b2
// function multiply(a, b = 2) {
//     return a * b;
// }
//
// let num1 = multiply(5);
// console.log(num1);
// let num2 = multiply(5, 8);
// console.log(num2);

// b3
class Geeks {
    constructor(a, b = 3) {
        //     console.log(  a * b)
        this.a = a;
        this.b = b;


    }
    multiply() {
        return this.a * this.b;
    }
}
 let obj = new Geeks(5);
console.log(obj.multiply())
let obj1 = new Geeks(5, 4);
console.log(obj1.multiply())


