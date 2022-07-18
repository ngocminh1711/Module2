"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComparableCircle_1 = require("./ComparableCircle");
let circles = [];
circles[0] = new ComparableCircle_1.ComparableCircle(10);
circles[1] = new ComparableCircle_1.ComparableCircle(20);
circles[2] = new ComparableCircle_1.ComparableCircle(30);
let result = circles[0].compareTo(circles[1]);
if (result == 1) {
    console.log("The circle is larger.");
}
else {
    console.log("The circle is smaller.");
}
