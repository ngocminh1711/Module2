"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(radius, color, filled) {
        super(color, filled);
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
    getPerimeter() {
        return 2 * this.radius * Math.PI;
    }
    toString() {
        return "A Circle with radius = "
            + this.getRadius()
            + " and "
            + super.toString();
    }
}
exports.Circle = Circle;
