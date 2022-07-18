"use strict";
class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
}
let circleList = [];
circleList.push(new Circle(10, 'yellow'));
circleList.push(new Circle(15, 'green'));
circleList.push(new Circle(20, 'blue'));
function showCircle(circle) {
    console.log(`Hình tròn có màu ${circle.color} và bán kính là ${circle.radius}`);
}
circleList.forEach(showCircle);
