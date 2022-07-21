"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(id, name, age) {
        this._id = id;
        this._name = name;
        this._age = age;
    }
    Student.prototype.getId = function () {
        return this._id;
    };
    Student.prototype.setId = function (value) {
        this._id = value;
    };
    Student.prototype.getName = function () {
        return this._name;
    };
    Student.prototype.setName = function (value) {
        this._name = value;
    };
    Student.prototype.getAge = function () {
        return this._age;
    };
    Student.prototype.setAge = function (value) {
        this._age = value;
    };
    return Student;
}());
exports.Student = Student;
