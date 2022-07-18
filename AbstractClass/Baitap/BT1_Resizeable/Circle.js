"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        return Math.PI * this.radius * 2;
    }
    reSize(percent) {
        return this.calculateArea() * percent + this.calculateArea();
    }
}
exports.Circle = Circle;
