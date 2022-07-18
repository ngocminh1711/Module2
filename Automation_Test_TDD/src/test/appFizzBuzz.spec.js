"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FizzBuzz_1 = require("../../BaiTap/BT4_FizzBuzz/FizzBuzz");
describe("FizzBuzz", () => {
    test("print", () => {
        let fizzBuzz = new FizzBuzz_1.FizzBuzz(1);
        let message = "1";
        expect(fizzBuzz.print()).toEqual(message);
    });
    test("printFizz", () => {
        let fizzBuzz = new FizzBuzz_1.FizzBuzz(9);
        let message = "Fizz";
        expect(fizzBuzz.print()).toEqual(message);
    });
    test("printBuzz", () => {
        let fizzBuzz = new FizzBuzz_1.FizzBuzz(10);
        let message = "Buzz";
        expect(fizzBuzz.print()).toEqual(message);
    });
    test("printFizzBuzz", () => {
        let fizzBuzz = new FizzBuzz_1.FizzBuzz(15);
        let message = "FizzBuzz";
        expect(fizzBuzz.print()).toEqual(message);
    });
});
