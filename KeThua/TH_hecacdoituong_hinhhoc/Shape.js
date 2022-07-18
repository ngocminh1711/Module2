"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(color, filled) {
        this.color = 'red';
        this.filled = true;
        this.color = 'red';
        this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(value) {
        this.color = value;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    toString() {
        return " A Shape with a color of "
            + this.getColor()
            + " and "
            + (this.isFilled() ? " filled " : " not filled ");
    }
}
exports.Shape = Shape;
