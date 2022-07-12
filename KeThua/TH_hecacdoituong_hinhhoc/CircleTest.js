"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var circle = new Circle_1.Circle(3.5, "indigo", false);
console.log(circle);
console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle.setRadius(4));
console.log(circle.toString());
