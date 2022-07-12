import {Point2D} from "./Point2D";

export class Point3D extends Point2D {
    z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }

    getZ(): number {
        return this.z;
    }

    setZ(z: number) {
        this.z = z;
    }

    getXYZ(): object  {
        return {
                x: super.getX(),
                y: super.getY(),
                z: this.z
        }

    }
    setXYZ(x: number, y: number, z: number) {
        this.setXY(x,y);
        this.z = z;
    }
}