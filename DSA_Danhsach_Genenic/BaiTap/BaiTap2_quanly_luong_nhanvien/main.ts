import {Node} from "./Node";
import {StaffManager} from "./StaffManager";

let staffManager = new StaffManager();

staffManager.insertFirst(1, 6000000);
staffManager.insertFirst(8, 700000);
staffManager.insertLast(3,10000000);
staffManager.insertFirst(9,900000);
console.log('--- Thông tin đầu node và cuối node----')
console.log(staffManager)
console.log('-----Danh sách nhân viên------')
console.log(staffManager.readList())
console.log('-----Tổng tiền của nhân viên----')
console.log(staffManager.sumMoney())
console.log('-------Số tiền cao nhất-------');
console.log(staffManager.findMaxMoney())
console.log('------Tháng có số tiền cao nhất là--------')
console.log(staffManager.findMonthHasMoneyHigher())