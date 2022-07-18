"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffManager = void 0;
const Node_1 = require("../BaiTap2_quanly_luong_nhanvien/Node");
class StaffManager {
    constructor() {
        this.staffList = [];
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirst(month, money) {
        let node = new Node_1.Node(month, money);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }
    insertLast(month, money) {
        if (!this.head) {
            this.insertFirst(month, money);
        }
        else {
            let node = new Node_1.Node(month, money);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }
    getSize() {
        return this.size;
    }
    readList() {
        let listData = [];
        let currentNode = this.head;
        while (currentNode != null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listData;
    }
    sumMoney() {
        let sum = 0;
        let currentNode = this.head;
        for (let i = 0; i < this.size; i++) {
            sum += currentNode.getMoney();
            currentNode = currentNode.next;
        }
        return sum;
    }
    findMonthHasMoneyHigher() {
        let currentNode = this.head;
        for (let i = 0; i < this.size; i++) {
            if (this.findMaxMoney() === currentNode.getMoney()) {
                return currentNode.getMonth();
            }
            currentNode = currentNode.next;
        }
    }
    findMaxMoney() {
        let currentNode = this.head;
        let max = 0;
        while (currentNode != null) {
            for (let i = 0; i < this.size; i++) {
                if (currentNode.getMoney() > max) {
                    max = currentNode.getMoney();
                }
                currentNode = currentNode.next;
            }
        }
        return max;
    }
}
exports.StaffManager = StaffManager;
