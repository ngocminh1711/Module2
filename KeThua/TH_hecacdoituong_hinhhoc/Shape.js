"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = 'red';
        this.filled = true;
        this.color = 'red';
        this.filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setColor = function (value) {
        this.color = value;
    };
    Shape.prototype.isFilled = function () {
        return this.filled;
    };
    Shape.prototype.setFilled = function (filled) {
        this.filled = filled;
    };
    Shape.prototype.toString = function () {
        return " A Shape with a color of "
            + this.getColor()
            + " and "
            + (this.isFilled() ? " filled " : " not filled ");
    };
    return Shape;
}());
exports.Shape = Shape;
