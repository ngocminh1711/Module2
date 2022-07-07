"use strict";
exports.__esModule = true;
var TH2_1 = require("./TH2");
function distance(cicrleOne, cicrleTwo, d) {
    var distance = Math.pow(cicrleOne.radius - cicrleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
var cicrle1 = new TH2_1["default"](9);
var cicrle2 = new TH2_1["default"](5);
console.log(distance(cicrle1, cicrle2, 24));
