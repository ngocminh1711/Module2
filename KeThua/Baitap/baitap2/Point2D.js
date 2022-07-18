"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2D = void 0;
class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    getXY() {
        return {
            x: this.x,
            y: this.y
        };
    }
    setXY(x, y) {
        this.x = x;
        this.y = y;
    }
}
exports.Point2D = Point2D;
