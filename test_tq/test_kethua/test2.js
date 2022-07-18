"use strict";
class Rectangle {
    constructor(height, width) {
        this.name = 'Rectangle';
        this.height = height;
        this.width = width;
    }
    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }
    get area() {
        return this.height * this.width;
    }
    set area(value) {
        this.area = value;
    }
}
class Square extends Rectangle {
    constructor(width, height) {
        super(width, height);
        this.name = 'Square';
    }
}
