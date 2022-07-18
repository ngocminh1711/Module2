"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chicken = void 0;
const Animal_1 = require("./Animal");
class Chicken extends Animal_1.Animal {
    makesound() {
        return "Chicken: cluck-cluck!";
    }
    howToEat() {
        return "Could be fried";
    }
}
exports.Chicken = Chicken;
