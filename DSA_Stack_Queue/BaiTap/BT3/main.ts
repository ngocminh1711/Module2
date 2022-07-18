import {Queue} from "./Queue";
import {Patient} from "./Patient";

let queue = new Queue();
let patient1 = new Patient('Smith', 1);
let patient2 = new Patient('John', 4);
let patient3 = new Patient('Ferenbach', 6);
let patient4 = new Patient('Brown', 1);
let patient5 = new Patient('Ingram', 5);
// add patient to queue;
queue.enqueue(patient1);
queue.enqueue(patient2);
queue.enqueue(patient3);
queue.enqueue(patient4);
queue.enqueue(patient5);
console.log('-----Danh sách bệnh nhân-----')
console.log(queue)


function checkCode() {
    // let i = 0;
    // while (i < queue.container.length) {
    //     if (patient1.getCode() === 1
    //         || patient2.getCode() === 1
    //         || patient3.getCode() === 1
    //         || patient4.getCode() === 1
    //         || patient5.getCode() === 1) {
    //         queue.dequeue();
    //         i++;
    //     }
    // }
}

console.log('-----Danh sách bệnh nhân sau khi lấy ra ưu tiên----')
console.log(queue)

console.log(queue.dequeue());
console.log(queue.dequeue());





