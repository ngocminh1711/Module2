class Person {
    name: string;

    eat(): void {
        console.log(this.name+ 'eat when hungry');
    }
}

class Student extends Person {
    rollnumber: number;

    constructor (rollnumber: number,
                name1: string) {
        super();
        this.rollnumber = rollnumber;
        this.name = name1;
    }
    displayInformation(): void {
        console.log("Name: "+this.name+", Roll Number: "+this.rollnumber)
    }

    eat(): void {
        console.log(this.name+ 'eat during break')
    }
}

let student1 = new Student(2,"Robit");

student1.displayInformation();
student1.eat();
