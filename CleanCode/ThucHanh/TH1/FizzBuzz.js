"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FizzBuzz = void 0;
class FizzBuzz {
    constructor(n) {
        let isFizz = n % 5 == 0;
        let isBuzz = n % 3 == 0;
        if (isFizz && isBuzz) {
            this.message = 'FizzBuzz';
        }
        else if (isFizz) {
            this.message = 'Fizz';
        }
        else if (isBuzz) {
            this.message = 'Buzz';
        }
        else {
            this.message = n + '';
        }
    }
}
exports.FizzBuzz = FizzBuzz;
