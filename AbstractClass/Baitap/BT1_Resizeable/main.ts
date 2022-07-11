import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

let shape = []

let circle = new Circle('hinh tron',10);
let rectangle = new Rectangle(20,30,'hinh chu nhat')
let square = new Square('hinh vuong',10)
shape.push(circle)
shape.push(rectangle)
shape.push(square)
console.log(shape)

let percent = (Math.floor(Math.random() * 100)/100)

// shape.forEach((item,index) => {
//     if (item instanceof Square) {
//         console.log(item.howToColor())
//     }
// })
for(const item of shape){
    if (item instanceof Square) {
        console.log(item.howToColor())
    }

}



console.log('--Diện tích hình tròn ban đầu--')
console.log(circle.calculateArea())
console.log('--Diện tích hình tròn sau khi theo tỉ lệ ngẫu nhiên 1 -> 100 --')
console.log(circle.reSize(percent))
console.log(percent)
console.log('--Diên tích hình chữ nhật ban đầu')
console.log(rectangle.calculateArea())
console.log('--Diện tích hình chữ nhật sau khi theo tỉ lệ ngẫu nhiên 1 -> 100 --')
console.log(rectangle.reSize(percent))
console.log('--Diên tích hình vuông ban đầu')
console.log(square.calculateArea())
console.log('Diện tích hình vuông sau khi theo tỉ lệ ngẫu nhiên 1 -> 100 --')
console.log(square.reSize(percent))







