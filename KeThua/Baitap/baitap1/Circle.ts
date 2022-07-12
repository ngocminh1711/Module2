export class Circle {
    radius: number;
    color: string;

    constructor(radius: number,
                color: string) {
        this.radius = radius;
        this.color = color;
                }
    getColor(): string {
        return this.color;
    }
    setColor(color: string) :void{
        this.color = color;
    }
    getRadius(): number {
        return this.radius;
    }
    setRadius(radius: number) :void {
        this.radius = radius;
    }
    getArea(): number {
        return Math.pow(this.radius ,2) * Math.PI;
    }
}