"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const rectangle_1 = require("./rectangle");
class Square extends rectangle_1.Rectangle {
    constructor(side, color, filled) {
        super(side, side, color, filled);
    }
    getSide() {
        return this.width;
    }
    setSide(width) {
        this.width = width;
    }
    getLength() {
        return this.length;
    }
    setHeight(length) {
        this.length = length;
    }
    toString() {
        return " A square with width= "
            + this.getWidth()
            + ", height= "
            + this.getLength()
            + super.toString();
    }
}
exports.Square = Square;
