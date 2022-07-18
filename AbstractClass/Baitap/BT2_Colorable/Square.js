"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const Rectangle_1 = require("./Rectangle");
class Square extends Rectangle_1.Rectangle {
    constructor(name, width) {
        super(width, width, name);
    }
    howToColor() {
        if (this.name === "hinh vuong") {
            return "Color all four sides...";
        }
    }
}
exports.Square = Square;
