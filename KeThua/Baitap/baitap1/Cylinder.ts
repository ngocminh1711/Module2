import {Circle} from './Circle';

export class Cylinder extends Circle {
    height: number;

    constructor(radius: number,
                color: string,
                height: number){
        super(radius,color);
        this.height = height;
    }
    getVolume(): number {
        return this.height * this.getArea()
    }
}