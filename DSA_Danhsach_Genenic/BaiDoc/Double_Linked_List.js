"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.DoublelinkedList = void 0;
var DoublelinkedList = /** @class */ (function () {
    function DoublelinkedList() {
        this.nodes = [];
    }
    DoublelinkedList.prototype.size = function () {
        return this.nodes.length;
    };
    DoublelinkedList.prototype.head = function () {
        return this.size() ? this.nodes[0] : null;
    };
    DoublelinkedList.prototype.tail = function () {
        return this.size() ? this.nodes[this.size() - 1] : null;
    };
    DoublelinkedList.prototype.insertAt = function (index, value) {
        var previousNode = this.nodes[index - 1] || null;
        var nextNode = this.nodes[index] || null;
        var node = { value: value, next: nextNode, previous: previousNode };
        if (previousNode) {
            previousNode.next = node;
        }
        if (nextNode) {
            nextNode.previous = node;
        }
        this.nodes.splice(index, 0, node);
    };
    DoublelinkedList.prototype.insertFirst = function (value) {
        this.insertAt(0, value);
    };
    DoublelinkedList.prototype.insertLast = function (value) {
        this.insertAt(this.size(), value);
    };
    DoublelinkedList.prototype.getAt = function (index) {
        return this.nodes[index];
    };
    DoublelinkedList.prototype.remove = function (index) {
        var previousNode = this.nodes[index - 1] || null;
        var nextNode = this.nodes[index + 1] || null;
        if (previousNode) {
            previousNode.next = nextNode;
        }
        if (nextNode) {
            nextNode.previous = previousNode;
        }
        return this.nodes.splice(index, 1);
    };
    DoublelinkedList.prototype.clear = function () {
        this.nodes = [];
    };
    DoublelinkedList.prototype.reverse = function () {
        this.nodes = this.nodes.reduce(function (acc, _a) {
            var value = _a.value;
            var nextNode = acc[0] || null;
            var node = { value: value, next: nextNode, previous: null };
            if (nextNode)
                nextNode.previous = node;
            return __spreadArray([node], acc, true);
        }, []);
    };
    return DoublelinkedList;
}());
exports.DoublelinkedList = DoublelinkedList;
var list = new DoublelinkedList();
list.insertFirst(1);
list.insertLast(2);
list.insertFirst(3);
list.insertLast(4);
list.insertAt(5, 3);
console.log(list);
list.reverse();
