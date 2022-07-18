"use strict";
// let numbers: number[] = [1, 2, 3, 4]
// console.log(numbers[0])
// const arr_names: number[] = new Array(4);
// for (let i = 0; i < arr_names.length; i++) {
//     arr_names[i] = i * 2
//     console.log(arr_names[i])
// }
// const nums: number[] = [1001, 1002, 1003, 1004]
//
// for (let j =0; j < nums.length; j++) {
//     console.log(nums[j])
// }
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getPerimeter() {
        return `Chu vi là ${2 * (this.width + this.height)}`;
    }
    getArea() {
        return `Diện tích là  ${(this.width * this.height)}`;
    }
    display() {
        let rec = [];
        for (let i = 0; i < this.width; i++) {
            rec[i] = [];
            // console.log("*")
            for (let j = 0; j < this.height; j++) {
                rec[i][j] = '*';
                // console.log("*")
            }
        }
        console.log(rec);
    }
}
let rectangle = new Rectangle(3, 5);
rectangle.display();
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
