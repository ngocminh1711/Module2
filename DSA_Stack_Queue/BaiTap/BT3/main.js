"use strict";
exports.__esModule = true;
var Queue_1 = require("./Queue");
var Patient_1 = require("./Patient");
var queue = new Queue_1.Queue();
var patient1 = new Patient_1.Patient('Smith', 5);
var patient2 = new Patient_1.Patient('John', 4);
var patient3 = new Patient_1.Patient('Ferenbach', 6);
var patient4 = new Patient_1.Patient('Brown', 1);
var patient5 = new Patient_1.Patient('Ingram', 1);
var queue2 = new Queue_1.Queue();
queue.enqueue(patient1);
queue.enqueue(patient2);
queue.enqueue(patient3);
queue.enqueue(patient4);
queue.enqueue(patient5);
console.log('-----Danh sách bệnh nhân-----');
console.log(queue);
queue.dequeue(patient2);
console.log(queue);
// function checkPrioritized () {
//     queue.forEach(index => {
//         if (patient1.getCode() === 1 || patient2.getCode() === 1 || patient3.getCode() === 1 || patient4.getCode() === 1 || patient5.getCode() === 1) {
//             return
//         } })
//
//     }
// }
