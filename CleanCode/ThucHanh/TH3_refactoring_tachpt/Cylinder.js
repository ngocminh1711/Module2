"use strict";
exports.__esModule = true;
exports.Cylinder = void 0;
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.getVolume = function (radius, height) {
        var baseArea = this.getArea(radius);
        var perimeter = this.getPerimeter(radius);
        var volume = perimeter * height + 2 * baseArea;
        return volume;
    };
    Cylinder.getPerimeter = function (radius) {
        return 2 * Math.PI * radius;
    };
    Cylinder.getArea = function (radius) {
        return Math.PI * radius * radius;
    };
    return Cylinder;
}());
exports.Cylinder = Cylinder;
