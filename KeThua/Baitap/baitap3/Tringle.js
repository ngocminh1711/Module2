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
exports.Tringle = void 0;
var Shape_1 = require("./Shape");
var Tringle = /** @class */ (function (_super) {
    __extends(Tringle, _super);
    function Tringle(name, color, side1, side2, side3, p) {
        if (p === void 0) { p = (side1 + side2 + side3) / 2; }
        var _this = _super.call(this, name, color) || this;
        _this.side1 = 3;
        _this.side2 = 4;
        _this.side3 = 5;
        _this.side1 = side1;
        _this.side2 = side2;
        _this.side3 = side3;
        _this.p = p;
        return _this;
    }
    Tringle.prototype.getInfo = function () {
        return {
            name: this.name,
            color: this.color,
            side1: this.side1,
            side2: this.side2,
            side3: this.side3
        };
    };
    Tringle.prototype.getSide1 = function () {
        return this.side1;
    };
    Tringle.prototype.getSide2 = function () {
        return this.side2;
    };
    Tringle.prototype.getSide3 = function () {
        return this.side3;
    };
    Tringle.prototype.getP = function () {
        return this.p;
    };
    Tringle.prototype.getArea = function () {
        return 'Diện tích tam giác = ' + (Math.sqrt(this.p * (this.p - this.side1) * (this.p - this.side2) * (this.p - this.side3)));
    };
    Tringle.prototype.getPerimeter = function () {
        return 'Chu vi tam giác = ' + (this.side1 + this.side2 + this.side3);
    };
    return Tringle;
}(Shape_1.Shape));
exports.Tringle = Tringle;
