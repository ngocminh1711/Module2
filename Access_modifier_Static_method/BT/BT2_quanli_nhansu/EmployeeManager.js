"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.prototype.getInfo = function () {
        return EmployeeManager.employees;
    };
    EmployeeManager.prototype.addEmmployee = function (employee) {
        EmployeeManager.employees.push(employee);
    };
    EmployeeManager.prototype["delete"] = function (lastname) {
        EmployeeManager.employees.forEach(function (employee, index) {
            if (employee.getLastName() === lastname) {
                EmployeeManager.employees.splice(index, 1);
            }
        });
    };
    EmployeeManager.prototype.update = function (firstname, lastname, birthday, address, position, id) {
        EmployeeManager.employees.forEach(function (employee, index) {
            if (employee.id === id) {
                employee.setFirstName(firstname);
                employee.setLastName(lastname);
                employee.setBirthday(birthday);
                employee.setAddress(address);
                employee.setPosition(position);
            }
        });
    };
    EmployeeManager.employees = [];
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
