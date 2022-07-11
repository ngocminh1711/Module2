import {Rectangle} from "./Rectangle";
import {Resizeable} from "./InterfaceClass/Resizeable";
import {Colorable} from "./InterfaceClass/Colorable";

export class Square extends Rectangle implements Resizeable, Colorable {
    constructor(name: string,
                width: number,) {
        super(width, width, name);
    }
    reSize(percent: number): number {
        return super.reSize(percent);
    }
    howToColor(): string {
            return "Color all four sides..." + " và Diện tích hình vuông = " + super.calculateArea()
        }
}
