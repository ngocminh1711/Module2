"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Cylinder_1 = require("./Cylinder");
let circle = new Circle_1.Circle(10, "yellow");
let cylinder = new Cylinder_1.Cylinder(20, "blue", 10);
console.log(circle.getArea());
console.log(cylinder.getRadius());
console.log(cylinder.getVolume());
