"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TH2_1 = __importDefault(require("./TH2"));
function distance(cicrleOne, cicrleTwo, d) {
    let distance = Math.pow(cicrleOne.radius - cicrleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
let cicrle1 = new TH2_1.default(9);
let cicrle2 = new TH2_1.default(5);
console.log(distance(cicrle1, cicrle2, 24));
