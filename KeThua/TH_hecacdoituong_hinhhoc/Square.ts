import {Rectangle} from './rectangle'

export class Square extends  Rectangle {
    constructor(side: number,color: string, filled: boolean){
        super(side, side, color, filled)

    }
    getSide(): number {
        return this.width;
    }
    setSide(width): void {
        this.width = width;

    }
    getLength(): number {
        return this.length;
    }
    setHeight(length: number): void {
        this.length = length;
    }
    toString(): string {
        return " A square with width= "
            + this.getWidth()
            + ", height= "
            + this.getLength()
            +super.toString();
    }
}