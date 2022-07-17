import {StudentScoreManagement} from "./StudentScoreManagement";

let studentList = new StudentScoreManagement();
studentList.insertFirst('Ngo Minh Ngoc',10);
studentList.insertFirst('Pham Thanh Thao',10);
studentList.insertLast('Tan',9);
studentList.insertFirst('Toan',8);;
studentList.insertLast('Kiet',4);

console.log(studentList.showList())
console.log(studentList.getSize())
console.log('---Số lượng học sinh dưới 5 điểm là---')
console.log(studentList.totalStudentFail())
console.log('----Điểm số cao nhất:----')
console.log(studentList.findMaxScore())
console.log('----Những học sinh có điểm số cao nhất:----')
studentList.listStudentMaxScore()
console.log('---Tìm kiếm những học sinh có tên:----')
studentList.findByName('Tan')