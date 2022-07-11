import {Shape} from "./Shape";
import {Resizeable} from "./InterfaceClass/Resizeable";

export class Rectangle extends Shape implements Resizeable {
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }
    reSize(percent: number): number {
        return this.calculateArea() * percent + this.calculateArea();
    }
}
