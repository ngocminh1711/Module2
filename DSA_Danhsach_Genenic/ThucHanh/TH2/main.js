"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
let linkedList = new LinkedList_1.LinkedList();
linkedList.insertFirstNode(1);
linkedList.insertFirstNode(2);
linkedList.insertFirstNode(3);
linkedList.insertFirstNode(40);
linkedList.insertLastNode(50);
console.log(linkedList.getSize());
console.log(linkedList.readLists());
