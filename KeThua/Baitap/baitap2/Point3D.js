"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point3D = void 0;
const Point2D_1 = require("./Point2D");
class Point3D extends Point2D_1.Point2D {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    getZ() {
        return this.z;
    }
    setZ(z) {
        this.z = z;
    }
    getXYZ() {
        return {
            x: super.getX(),
            y: super.getY(),
            z: this.z
        };
    }
    setXYZ(x, y, z) {
        this.setXY(x, y);
        this.z = z;
    }
}
exports.Point3D = Point3D;
