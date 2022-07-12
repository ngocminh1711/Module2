import {Staff} from './Staff'
import {StaffManager} from './StaffManager'

let staff1 = new Staff('Ngo Minh Ngoc',true,'17/11/1993','ngocskit@gmail.com','0347990886');
let staff2 = new Staff('Tan Hoang Minh',true,'20/10/1995','tan@gmail.com','0124511');
let staffManager = new StaffManager();
staffManager.addStaff(staff1);
staffManager.addStaff(staff2);

console.log(staffManager.getInfo());

staffManager.removeStaff('Ngo Minh Ngoc')

console.log(staffManager.getInfo());

