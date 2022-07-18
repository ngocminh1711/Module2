"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextDayCalculator = void 0;
class NextDayCalculator {
    constructor() {
    }
    calculatorDate(date) {
        date.setDate(date.getDate() + 1);
        return date;
    }
}
exports.NextDayCalculator = NextDayCalculator;
