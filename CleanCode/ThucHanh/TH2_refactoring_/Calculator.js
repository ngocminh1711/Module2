"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    static calculate(firstOperand, secondOperand, operator) {
        switch (operator) {
            case this.ADDITION:
                return firstOperand + secondOperand;
            case this.SUBTRACTION:
                return firstOperand - secondOperand;
            case this.MULTIPLICATION:
                return firstOperand * secondOperand;
            case this.DIVISION:
                if (secondOperand != 0)
                    return firstOperand / secondOperand;
                else
                    console.log("Can not divide by 0");
            default:
                console.log("Unsupported operation");
        }
    }
}
exports.Calculator = Calculator;
Calculator.SUBTRACTION = '-';
Calculator.ADDITION = '+';
Calculator.MULTIPLICATION = '*';
Calculator.DIVISION = '/';
