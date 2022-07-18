"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasicCalculator_1 = require("../../BaiTap/BT1_pheptinh_2so/BasicCalculator");
describe('BasicCalulator Testing', () => {
    let calc = new BasicCalculator_1.BasicCalculator();
    test('should return an instance of a basic calculator', () => {
        expect(calc).toEqual({});
    });
    test('should return the addition of a + b', () => {
        expect(calc.add(1, 3)).toEqual(4);
    });
    test('should return the subtraction of a - b', () => {
        expect(calc.subtract(1, 3)).toEqual(-2);
    });
    test('should return the multple of a * b', () => {
        expect(calc.multiple(1, 3)).toEqual(3);
    });
    test('should return the divide of a / b', () => {
        expect(calc.divide(1, 3)).toEqual(1 / 3);
    });
});
