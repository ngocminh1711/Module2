class Shape {
    constructor (color,filled) {
        this.color = color;
        this.filled = filled;
    }

}

class Circle {
    constructor (color,filled,radius) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    getArea () {
        return Math.pow(this.radius,2)* 3.14;
    }
    getPerimeter () {
        return this.radius * 2 *3.14;
    }
}

class Rectangle {
    constructor (color,filled,width,height) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.height = height;
    }
    getArea () {
        return this.width * this.height;
    }
    getPerimeter(){
        return 2*(this.width + this.height);
    }
}
class Square {
    constructor (color,filled,side) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
}

let circle = new Circle('blue',true,5)
console.log(circle.getArea());