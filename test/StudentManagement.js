"use strict";
exports.__esModule = true;
exports.StudentManagement = void 0;
var StudentManagement = /** @class */ (function () {
    function StudentManagement() {
        this.studentList = [];
    }
    StudentManagement.prototype.addStudent = function (student) {
        this.studentList.push(student);
    };
    StudentManagement.prototype.findStudentByID = function (id) {
        var _this = this;
        var newStudentList = [];
        var flag = -1;
        this.studentList.forEach(function (student, index) {
            if (student.getId() == id) {
                newStudentList.push(_this.studentList[index]);
                flag++;
            }
        });
        return newStudentList;
    };
    return StudentManagement;
}());
exports.StudentManagement = StudentManagement;
