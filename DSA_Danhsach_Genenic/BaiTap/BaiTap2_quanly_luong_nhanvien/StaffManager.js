"use strict";
exports.__esModule = true;
exports.StaffManager = void 0;
var Node_1 = require("../BaiTap2_quanly_luong_nhanvien/Node");
var StaffManager = /** @class */ (function () {
    function StaffManager() {
        this.staffList = [];
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    StaffManager.prototype.insertFirst = function (month, money) {
        var node = new Node_1.Node(month, money);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    StaffManager.prototype.insertLast = function (month, money) {
        if (!this.head) {
            this.insertFirst(month, money);
        }
        else {
            var node = new Node_1.Node(month, money);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    StaffManager.prototype.getSize = function () {
        return this.size;
    };
    StaffManager.prototype.readList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode != null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listData;
    };
    StaffManager.prototype.sumMoney = function () {
        var sum = 0;
        var currentNode = this.head;
        for (var i = 0; i < this.size; i++) {
            sum += currentNode.getMoney();
            currentNode = currentNode.next;
        }
        return sum;
    };
    StaffManager.prototype.findMonthHasMoneyHigher = function () {
        var currentNode = this.head;
        for (var i = 0; i < this.size; i++) {
            if (this.findMaxMoney() === currentNode.getMoney()) {
                return currentNode.getMonth();
            }
            currentNode = currentNode.next;
        }
    };
    StaffManager.prototype.findMaxMoney = function () {
        var currentNode = this.head;
        var max = 0;
        while (currentNode != null) {
            for (var i = 0; i < this.size; i++) {
                if (currentNode.getMoney() > max) {
                    max = currentNode.getMoney();
                }
                currentNode = currentNode.next;
            }
        }
        return max;
    };
    return StaffManager;
}());
exports.StaffManager = StaffManager;
