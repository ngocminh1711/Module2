import {Shape} from './Shape'

export class Circle extends Shape {
    private radius: number;
    constructor(radius: number, color: string, filled: boolean) {
        super(color, filled);
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }
    setRadius(radius: number) {
        this.radius = radius;
    }
    getArea(): number {
        return this.radius* this.radius* Math.PI
    }
    getPerimeter(): number {
        return 2*this.radius* Math.PI;
    }
    toString(): string {
        return "A Circle with radius = "
        + this.getRadius()
        +" and "
        +super.toString();
    }
}