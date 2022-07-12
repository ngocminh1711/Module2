import {Animal} from './Animal'
import {Edible} from "./InterfaceClass/Edible";

export class Chicken extends Animal implements Edible{
    makesound(): string {
        return "Chicken: cluck-cluck!"
    }
    howToEat(): string {
        return "Could be fried";
    }
}