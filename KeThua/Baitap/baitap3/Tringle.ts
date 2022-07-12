import {Shape} from './Shape'

export class Tringle extends Shape {

    side1: number = 3;
    side2: number = 4;
    side3: number = 5;
    p: number;

    constructor(
        name: string,
        color: string,
        side1: number,
        side2: number,
        side3: number,
        p: number = (side1 + side2 + side3)/2
) {
        super(name,color)
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.p = p;
    }
    getInfo(): object {
        return {
            name: this.name,
            color: this.color,
            side1: this.side1,
            side2: this.side2,
            side3: this.side3,
        }
    }
    getSide1(): number {
        return this.side1;
    }
    getSide2(): number {
        return this.side2;
    }
    getSide3(): number {
        return this.side3;
    }
    getP(): number {
        return this.p;
    }
    getArea(): string {
        return 'Diện tích tam giác = ' + (Math.sqrt(this.p*(this.p - this.side1)*(this.p - this.side2)*(this.p - this.side3)));
    }
    getPerimeter(): string {
        return 'Chu vi tam giác = ' + (this.side1 + this.side2 + this.side3);
    }
}