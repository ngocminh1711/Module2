class Circle {
    radius: number;
    color: string

    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }
}
let circleList: Circle[] = [];

circleList.push(new Circle(10,'yellow',));
circleList.push(new Circle(15,'green'));
circleList.push(new Circle(20,'blue'));

function showCircle(circle: Circle) {
    console.log(`Hình tròn có màu ${circle.color} và bán kính là ${circle.radius}`);
}

circleList.forEach(showCircle);