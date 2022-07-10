import {Point2D} from "./Point2D"
import {Point3D} from "./Point3D"

let point2d = new Point2D(10,10)
let point3d = new Point3D(20,20,20)
console.log(point2d.getXY());
console.log(point3d.getXYZ());

point2d.setXY(30,30);
console.log(point2d.getXY());

point3d.setXYZ(100,100,100);
console.log(point3d.getXYZ());