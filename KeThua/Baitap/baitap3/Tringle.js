"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tringle = void 0;
const Shape_1 = require("./Shape");
class Tringle extends Shape_1.Shape {
    constructor(name, color, side1, side2, side3, p = (side1 + side2 + side3) / 2) {
        super(name, color);
        this.side1 = 3;
        this.side2 = 4;
        this.side3 = 5;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.p = p;
    }
    getInfo() {
        return {
            name: this.name,
            color: this.color,
            side1: this.side1,
            side2: this.side2,
            side3: this.side3,
        };
    }
    getSide1() {
        return this.side1;
    }
    getSide2() {
        return this.side2;
    }
    getSide3() {
        return this.side3;
    }
    getP() {
        return this.p;
    }
    getArea() {
        return 'Diện tích tam giác = ' + (Math.sqrt(this.p * (this.p - this.side1) * (this.p - this.side2) * (this.p - this.side3)));
    }
    getPerimeter() {
        return 'Chu vi tam giác = ' + (this.side1 + this.side2 + this.side3);
    }
}
exports.Tringle = Tringle;
