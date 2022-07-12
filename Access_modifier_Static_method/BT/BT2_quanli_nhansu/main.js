"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var EmployeeManager_1 = require("./EmployeeManager");
var employee1 = new Employee_1.Employee('Ngo', 'Minh Ngoc', '1993/11/17', 'Ba Dinh', 'Staff', '1');
var employee2 = new Employee_1.Employee('Pham', 'Thanh Thao', '1995/5/15', 'Ha Dong', 'Manager', '2');
var employee3 = new Employee_1.Employee('Tran', 'Anh Kiet ', '2000/9/28', 'Quang Nom', 'Security', '3');
var employeeManager = new EmployeeManager_1.EmployeeManager();
// console.log(employee1)
employeeManager.addEmmployee(employee1);
employeeManager.addEmmployee(employee2);
employeeManager.addEmmployee(employee3);
console.log(employeeManager.getInfo());
// employeeManager.delete('1');
// console.log(employeeManager.getInfo())
// employeeManager.update('Tran');
employeeManager["delete"]('Minh Ngoc');
console.log(employeeManager.getInfo());
employeeManager.update('Tran', 'Tuan Anh', '2010/10/10', employee3.getAddress(), employee3.getPosition(), '3');
console.log(employeeManager.getInfo());
