import Circle from "./TH2";
function distance(cicrleOne: Circle, cicrleTwo: Circle,d: number): number {
    let distance = Math.pow(cicrleOne.radius - cicrleTwo.radius,2) + Math.pow(d,2);
    return Math.sqrt(distance)
}
let cicrle1 = new Circle(9);
let cicrle2 = new Circle(5);
console.log(distance(cicrle1, cicrle2,24));