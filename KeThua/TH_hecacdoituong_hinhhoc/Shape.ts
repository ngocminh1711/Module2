export class Shape {
    private  color: string = 'red';
    private filled: boolean = true;
    constructor(color: string,filled: boolean) {
        this.color = 'red';
        this.filled = filled;

    }
    getColor() {
        return this.color;
    }
    setColor(value: string) {
        this.color = value;
    }
    isFilled(): boolean {
        return this.filled;

    }
    setFilled(filled: boolean): void {
        this.filled = filled;
    }
    toString(): string {
        return " A Shape with a color of "
        + this.getColor()
        + " and "
        +(this.isFilled() ? " filled " : " not filled ");
    }
}