import {Rectangle} from "./Rectangle";
import {Colorable} from "./InterfaceClass/Colorable";

export class Square extends Rectangle implements Colorable {
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }
    howToColor(): string {
        if (this.name === "hinh vuong") {
            return "Color all four sides..."
        }
    }

}
