class Subject {
    constructor(name,score) {
        this.name = name;
        this.score = score;
    }
    setScore(score) {
        this.score = score;
    }
    getScore() {
        return this.score;
    }
    getName() {
        return this.name;
    }

}



class Student {
    constructor(name) {
        this.name = name;
        this.subjects = [];
    }
    addSubject(subject) {
        this.subjects.push(subject) ;
    }
    getRate() {
        let avg = 0;
        let total = 0;
        for (let i = 0; i < this.subjects.length;i++) {
            total += this.subjects[i].getScore();
        }
        avg = total / this.subjects.length;
        if (avg > 8) {
            return `Gioi`;
        }
        else if (avg < 5) {
            return `Yeu`;
        }
        else {
            return `Kha`;
        }
    }
}
let match = new Subject("toan",8);
let physical=new Subject("Ly",6);
let chemistry=new Subject("hoa",3);

let newStudent = new Student('Ngoc',[math.getScore(), ])
console.log(newStudent)