"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Square_1 = require("./Square");
let square = new Square_1.Square(20, "yellow", true);
console.log(square);
console.log(square.getArea());
console.log(square.getPerimeter());
console.log(square.toString());
