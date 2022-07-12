import {Employee} from './Employee';
import {EmployeeManager} from './EmployeeManager';


let employee1 = new Employee ('Ngo','Minh Ngoc','1993/11/17','Ba Dinh', 'Staff','1');
let employee2 = new Employee ('Pham','Thanh Thao','1995/5/15','Ha Dong','Manager','2');
let employee3 = new Employee ('Tran','Anh Kiet ','2000/9/28','Quang Nom','Security','3')
let employeeManager = new EmployeeManager();
// console.log(employee1)
employeeManager.addEmmployee(employee1)
employeeManager.addEmmployee(employee2)
employeeManager.addEmmployee(employee3)
console.log(employeeManager.getInfo())

// employeeManager.delete('1');


// console.log(employeeManager.getInfo())

// employeeManager.update('Tran');


employeeManager.delete('Minh Ngoc')

console.log(employeeManager.getInfo())

employeeManager.update('Tran','Tuan Anh', '2010/10/10',employee3.getAddress(),employee3.getPosition(),'3')

console.log(employeeManager.getInfo())