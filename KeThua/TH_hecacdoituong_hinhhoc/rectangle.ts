import {Shape} from './Shape'

export class Rectangle extends Shape {
    width: number = 1.0;
    length: number = 1.0;

    constructor(width: number, length: number,color: string,filled: boolean) {
        super(color,filled);
        this.width = width;
        this.length = length;
    }

    getWidth(): number {
        return this.width;
    }
    setWidth(width: number): void {
        this.width = width;
    }
    getLength(): number {
        return this.length;
    }
    setLength(length: number): void {
        this.length = length;
    }
    getArea(): number {
        return this.width * this.length;
    }
    getPerimeter(): number {
        return 2*(this.length+ this.length);
    }
    toString(): string {
        return "A Rectangle with width= "
        + this.getWidth()
        + " and length= "
        + this.getLength()
        + ", which is subclass of "
        +super.toString();
    }
}
