import {Circle} from './Circle';
import {Cylinder} from "./Cylinder";

let circle = new Circle(10,"yellow")
let cylinder = new Cylinder(20,"blue",10)
console.log(circle.getArea())
console.log(cylinder.getRadius())
console.log(cylinder.getVolume())