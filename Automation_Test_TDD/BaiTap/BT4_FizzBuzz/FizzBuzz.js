"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FizzBuzz = void 0;
class FizzBuzz {
    constructor(num) {
        this.num = num;
    }
    print() {
        if (this.num >= 0) {
            if (this.num % 3 === 0) {
                if (this.num % 5 === 0) {
                    return "FizzBuzz";
                }
                return "Fizz";
            }
            if (this.num % 5 === 0) {
                return "Buzz";
            }
            let text = this.num.toString();
            return text;
        }
    }
}
exports.FizzBuzz = FizzBuzz;
