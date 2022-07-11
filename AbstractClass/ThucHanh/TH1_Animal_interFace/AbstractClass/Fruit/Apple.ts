import {Fruit} from "../Fruit/Fruit";

export abstract class Apple extends Fruit {
    howToEat(): string {
        return "Apple could be slided";
    }
}