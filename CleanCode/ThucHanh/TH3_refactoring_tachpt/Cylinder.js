"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cylinder = void 0;
class Cylinder {
    static getVolume(radius, height) {
        let baseArea = this.getArea(radius);
        let perimeter = this.getPerimeter(radius);
        let volume = perimeter * height + 2 * baseArea;
        return volume;
    }
    static getPerimeter(radius) {
        return 2 * Math.PI * radius;
    }
    static getArea(radius) {
        return Math.PI * radius * radius;
    }
}
exports.Cylinder = Cylinder;
