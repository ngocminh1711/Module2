import {Employee} from './Employee';
import {EmployeeManager} from './EmployeeManager';


let employee1 = new Employee ('Ngo','Minh Ngoc',new Date ('1993/11/17'),'Ba Dinh', 'Staff','1');
let employee2 = new Employee ('Pham','Thanh Thao',new Date ('1995/5/15'),'Ha Dong','Manager','2');
let employee3 = new Employee ('Tran','Anh Kiet ',new Date ('2000/9/28'),'Quang Nom','Security','3')
let employeeManager = new EmployeeManager();
console.log(employee1)

employeeManager.addEmmployee(employee1)
employeeManager.addEmmployee(employee2)
employeeManager.addEmmployee(employee3)
console.log(employeeManager.getInfo())

employeeManager.delete('1');

console.log(employeeManager.getInfo())