"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rectangle_1 = require("./rectangle");
let rectangle1 = new rectangle_1.Rectangle(20, 30, "blue", true);
console.log(rectangle1);
console.log(rectangle1.getArea());
console.log(rectangle1.getPerimeter());
console.log(rectangle1.toString());
