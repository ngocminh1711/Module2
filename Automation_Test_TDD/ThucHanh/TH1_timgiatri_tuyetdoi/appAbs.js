"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsoluteNumberCalculator = void 0;
class AbsoluteNumberCalculator {
    static findAbsolute(num) {
        //throw new Error("Unsupported Operation Exception");
        //return 0;
        if (num < 0)
            return -num;
        return num;
    }
}
exports.AbsoluteNumberCalculator = AbsoluteNumberCalculator;
