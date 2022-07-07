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
    EmployeeManager.prototype["delete"] = function (id) {
        var indexEmployeeDelete = this.findID(id);
        if (indexEmployeeDelete !== -1) {
            EmployeeManager.employees.splice(indexEmployeeDelete, 1);
        }
        else {
            throw new Error('delete error');
        }
    };
    EmployeeManager.prototype.findID = function (id) {
        var i = -1;
        EmployeeManager.employees.forEach(function (employee, index) {
            if (employee.id === id) {
                i = index;
            }
        });
        return i;
    };
    EmployeeManager.employees = [];
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
