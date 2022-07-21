import {StudentManagement } from "./StudentManagement";
import {Student} from "./Student";


let studentManagement = new StudentManagement();
let student1 = new Student(1,'Ngoc', 29);
let student2 = new Student(2,'Minh', 30);
let student3 = new Student(3,'Ngo',19);
let student4 = new Student(1,'ngocminh',29);
studentManagement.addStudent(student1);
studentManagement.addStudent(student2);
studentManagement.addStudent(student3);
studentManagement.addStudent(student4);

console.log(studentManagement)

console.log(studentManagement.findStudentByID(0))
