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
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.setHeight = function (height) {
        this.height = height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return "Chu vi l\u00E0 ".concat(2 * (this.width + this.height));
    };
    Rectangle.prototype.getArea = function () {
        return "Di\u1EC7n t\u00EDch l\u00E0  ".concat((this.width * this.height));
    };
    Rectangle.prototype.display = function () {
        var rec = [];
        for (var i = 0; i < this.width; i++) {
            rec[i] = [];
            // console.log("*")
            for (var j = 0; j < this.height; j++) {
                rec[i][j] = '*';
                // console.log("*")
            }
        }
        console.log(rec);
    };
    return Rectangle;
}());
var rectangle = new Rectangle(3, 5);
rectangle.display();
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
