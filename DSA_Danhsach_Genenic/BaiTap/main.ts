import {StudentScoreManagement} from "./StudentScoreManagement";

let studentList = new StudentScoreManagement();
studentList.insertFirst('Ngo Minh Ngoc',6);
studentList.insertFirst('Pham Thanh Thao',10);
studentList.insertLast('Tan',10)
studentList.insertFirst('Tan',8)

console.log(studentList.showList())
console.log(studentList.getSize())
console.log('---Số lượng học sinh dưới 5 điểm là---')
console.log(studentList.totalStudentFail())
console.log('--------')
console.log(studentList.findMaxScore())
console.log('--------')
studentList.listStudentMaxScore()
console.log('---------')
studentList.findByName('Tan')