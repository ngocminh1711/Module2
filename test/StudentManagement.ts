import {Student} from './Student'

export class StudentManagement {
    studentList: Student[] = [];

    addStudent(student: Student): void {
        this.studentList.push(student);
    }

    findStudentByID(id: number) {
        let newStudentList = [];
        let flag = -1;
        this.studentList.forEach((student, index) => {
            if (student.getId() == id){
                newStudentList.push(this.studentList[index]);
                flag++;
            }
        })
        return newStudentList;
    }
}