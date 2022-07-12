"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Cylinder_1 = require("./Cylinder");
var circle = new Circle_1.Circle(10, "yellow");
var cylinder = new Cylinder_1.Cylinder(20, "blue", 10);
console.log(circle.getArea());
console.log(cylinder.getRadius());
console.log(cylinder.getVolume());
