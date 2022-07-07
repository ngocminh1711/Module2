// b3
// let [firstname, secondname,...lastname] = ['alpha', 'beta', 'gamma', 'delta']
//
// console.log(...lastname)

// b4
// let [firstName, secondName] = ['alpha', 'beta', 'gamma', 'delta'];
// [firstName, secondName] = [secondName, firstName]
// console.log(firstName)
// console.log(secondName)

//b5
// function NameList(name) {
//     return ['alpha', 'beta', 'gamma', 'delta']
// }
// let [firstName, secondName] = NameList(name);
//
// console.log(firstName);
// console.log(secondName);

//b6
// let marks = {
//     x: 31,
//     y: 20,
//     z: -4
// };
// const { x, y, z } = marks;
// console.log(x)
// console.log(y)
// console.log(z)

//b7
let marks = {
    section1: {
        x: 12,
        y: 20
},
    section2: {
        x: 30,
        y: 10
}
};
let {section1 : { x: x1, y: y1 }} = marks;
let {section2 : { x: x2, y: y2 }} = marks;

console.log(x1,y1);
console.log(x2,y2);

