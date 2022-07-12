export class Cylinder {
    public static getVolume(radius: number, height: number): number {
        let baseArea: number = this.getArea(radius);
        let perimeter: number = this.getPerimeter(radius);
        let volume: number = perimeter * height + 2 * baseArea;
        return volume;

    }

    private static getPerimeter(radius: number) {
        return 2 * Math.PI * radius;
    }

    private static getArea(radius: number) {
        return Math.PI * radius * radius;
    }
}