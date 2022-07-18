"use strict";
class Staff {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
let staff = new Staff('Ngo Minh Ngoc', 'ngocskit@gmail.com', 17);
console.log(staff);
console.log(`Tên của nhân viên: ${staff.getName()}`);
console.log(`email: ${staff.getEmail()}`);
console.log(`Tuổi: ${staff.getAge()}`);
let staff2 = new Staff(null, null, null);
staff2.setName('Pham Thanh Thao');
console.log(staff2.getName());
staff2.setEmail('phamThao@gmail.com');
console.log(staff2.getEmail());
staff2.setAge(18);
console.log(staff2.getAge());
