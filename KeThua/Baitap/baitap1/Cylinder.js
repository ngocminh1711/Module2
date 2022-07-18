"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cylinder = void 0;
const Circle_1 = require("./Circle");
class Cylinder extends Circle_1.Circle {
    constructor(radius, color, height) {
        super(radius, color);
        this.height = height;
    }
    getVolume() {
        return this.height * this.getArea();
    }
}
exports.Cylinder = Cylinder;
