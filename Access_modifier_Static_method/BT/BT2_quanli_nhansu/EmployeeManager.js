"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
class EmployeeManager {
    constructor() {
    }
    getInfo() {
        return EmployeeManager.employees;
    }
    addEmmployee(employee) {
        EmployeeManager.employees.push(employee);
    }
    delete(lastname) {
        EmployeeManager.employees.forEach((employee, index) => {
            if (employee.getLastName() === lastname) {
                EmployeeManager.employees.splice(index, 1);
            }
        });
    }
    update(firstname, lastname, birthday, address, position, id) {
        EmployeeManager.employees.forEach((employee, index) => {
            if (employee.id === id) {
                employee.setFirstName(firstname);
                employee.setLastName(lastname);
                employee.setBirthday(birthday);
                employee.setAddress(address);
                employee.setPosition(position);
            }
        });
    }
}
exports.EmployeeManager = EmployeeManager;
EmployeeManager.employees = [];
