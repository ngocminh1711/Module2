"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
const Square_1 = require("./Square");
let shape = [];
let circle = new Circle_1.Circle('hinh tron', 10);
let rectangle = new Rectangle_1.Rectangle(20, 30, 'hinh chu nhat');
let square = new Square_1.Square('hinh vuong', 10);
shape.push(circle);
shape.push(rectangle);
shape.push(square);
console.log(shape);
let percent = (Math.floor(Math.random() * 100) / 100);
// shape.forEach((item,index) => {
//     if (item instanceof Square) {
//         console.log(item.howToColor())
//     }
// })
for (const item of shape) {
    if (item instanceof Square_1.Square) {
        console.log(item.howToColor());
    }
}
console.log('--Diện tích hình tròn ban đầu--');
console.log(circle.calculateArea());
console.log('--Diện tích hình tròn sau khi theo tỉ lệ ngẫu nhiên 1 -> 100 --');
console.log(circle.reSize(percent));
console.log(percent);
console.log('--Diên tích hình chữ nhật ban đầu');
console.log(rectangle.calculateArea());
console.log('--Diện tích hình chữ nhật sau khi theo tỉ lệ ngẫu nhiên 1 -> 100 --');
console.log(rectangle.reSize(percent));
console.log('--Diên tích hình vuông ban đầu');
console.log(square.calculateArea());
console.log('Diện tích hình vuông sau khi theo tỉ lệ ngẫu nhiên 1 -> 100 --');
console.log(square.reSize(percent));
