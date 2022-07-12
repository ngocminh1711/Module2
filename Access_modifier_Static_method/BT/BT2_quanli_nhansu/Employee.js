"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(firstname, lastname, birthday, address, position, id) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
        this.address = address;
        this.position = position;
        this.id = id;
    }
    Employee.prototype.setFirstName = function (firstname) {
        this.firstname = firstname;
    };
    Employee.prototype.setLastName = function (lastname) {
        this.lastname = lastname;
    };
    Employee.prototype.setBirthday = function (birthday) {
        this.birthday = birthday;
    };
    Employee.prototype.setAddress = function (address) {
        this.address = address;
    };
    Employee.prototype.setPosition = function (position) {
        this.position = position;
    };
    Employee.prototype.setID = function (id) {
        this.id = id;
    };
    Employee.prototype.getLastName = function () {
        return this.lastname;
    };
    Employee.prototype.getFirstName = function () {
        return this.firstname;
    };
    Employee.prototype.getBirthday = function () {
        return this.birthday;
    };
    Employee.prototype.getAddress = function () {
        return this.address;
    };
    Employee.prototype.getPosition = function () {
        return this.position;
    };
    Employee.prototype.getID = function (id) {
        return this.id;
    };
    return Employee;
}());
exports.Employee = Employee;
