"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentScoreManagement = void 0;
const Node_1 = require("./Node");
class StudentScoreManagement {
    constructor() {
        this.studentList = [];
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirst(name, score) {
        let node = new Node_1.Node(name, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }
    insertLast(name, score) {
        if (!this.head) {
            this.insertFirst(name, score);
        }
        else {
            let node = new Node_1.Node(name, score);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }
    showList() {
        let currentNode = this.head;
        while (currentNode !== null) {
            this.studentList.push(currentNode.getInfo());
            currentNode = currentNode.next;
        }
        return this.studentList;
    }
    getSize() {
        return this.size;
    }
    totalStudentFail() {
        let currentNode = this.head;
        let count = 0;
        for (let i = 0; i < this.studentList.length; i++) {
            if (currentNode.getScore() <= 5) {
                count++;
            }
            currentNode = currentNode.next;
        }
        return count;
    }
    listStudentMaxScore() {
        let currentNode = this.head;
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.findMaxScore() === currentNode.getScore()) {
                console.log(currentNode.getName());
            }
            currentNode = currentNode.next;
        }
    }
    findMaxScore() {
        let currentNode = this.head;
        let max = 0;
        while (currentNode !== null) {
            if (max < currentNode.getScore()) {
                max = currentNode.getScore();
            }
            currentNode = currentNode.next;
        }
        return max;
    }
    findByName(name) {
        let currentNode = this.head;
        for (let i = 0; i < this.studentList.length; i++) {
            if (currentNode.getName() === name) {
                console.log(currentNode.getInfo());
            }
            currentNode = currentNode.next;
        }
    }
}
exports.StudentScoreManagement = StudentScoreManagement;
