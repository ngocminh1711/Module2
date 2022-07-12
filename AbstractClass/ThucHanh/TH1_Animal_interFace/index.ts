import  {Tiger} from './Tiger';
import {Chicken} from "./Chicken";
import {Apple}  from "./AbstractClass/Fruit/Apple";
import {Orange} from "./AbstractClass/Fruit/Orange";

let animals = []

animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach((item,index) => {
    console.log(item.makesound())
    if (item instanceof Chicken) {
        console.log(item.howToEat())
    }
})

console.log('----Fruit-----')
let fruits = [];

fruits[0] = new Apple();
fruits[1] = new Orange();

fruits.forEach((item,index) => {
    console.log(item.howToEat())
})

