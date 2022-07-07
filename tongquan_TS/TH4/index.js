var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    return Circle;
}());
var circleList = [];
circleList.push(new Circle(10, 'yellow'));
circleList.push(new Circle(15, 'green'));
circleList.push(new Circle(20, 'blue'));
function showCircle(circle) {
    console.log("H\u00ECnh tr\u00F2n c\u00F3 m\u00E0u ".concat(circle.color, " v\u00E0 b\u00E1n k\u00EDnh l\u00E0 ").concat(circle.radius));
}
circleList.forEach(showCircle);
