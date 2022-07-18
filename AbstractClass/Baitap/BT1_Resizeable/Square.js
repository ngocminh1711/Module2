"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const Rectangle_1 = require("./Rectangle");
class Square extends Rectangle_1.Rectangle {
    constructor(name, width) {
        super(width, width, name);
    }
    reSize(percent) {
        return super.reSize(percent);
    }
    howToColor() {
        return "Color all four sides..." + " và Diện tích hình vuông = " + super.calculateArea();
    }
}
exports.Square = Square;
