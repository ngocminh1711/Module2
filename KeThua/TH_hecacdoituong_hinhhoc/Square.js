"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Square = void 0;
var rectangle_1 = require("./rectangle");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width, length, color, filled) {
        return _super.call(this, width, length, color, filled) || this;
    }
    Square.prototype.getWidth = function () {
        return this.width;
    };
    Square.prototype.setWidth = function (width) {
        this.width = width;
    };
    Square.prototype.getHeight = function () {
        return this.length;
    };
    Square.prototype.setHeight = function (length) {
        this.length = length;
    };
    Square.prototype.toString = function () {
        return " A square with width= "
            + this.getWidth()
            + ", height= "
            + this.getHeight()
            + _super.prototype.toString.call(this);
    };
    return Square;
}(rectangle_1.Rectangle));
exports.Square = Square;
