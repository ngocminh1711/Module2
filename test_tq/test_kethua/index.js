"use strict";
class Person {
    eat() {
        console.log(this.name + 'eat when hungry');
    }
}
class Student extends Person {
    constructor(rollnumber, name1) {
        super();
        this.rollnumber = rollnumber;
        this.name = name1;
    }
    displayInformation() {
        console.log("Name: " + this.name + ", Roll Number: " + this.rollnumber);
    }
    eat() {
        console.log(this.name + 'eat during break');
    }
}
let student1 = new Student(2, "Robit");
student1.displayInformation();
student1.eat();
