"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
describe("add function", () => {
    test("add two number", () => {
        const number1 = 1;
        const number2 = 2;
        const result = 3;
        expect(app_1.Calculator.add(number1, number2)).toBe(result);
    });
});
