const  cars1 = ["AUDI", "BMW", "TATA", "MER"];
const cars2 = [...cars1];

const cars3 = [...cars2, "TOYOTA", "NISSAN"]

console.log(cars1)
console.log(cars2)
console.log(cars3)

const cars4 = {
    Brand: "BMW",
    Color: "black",
    Money: 20.000,
    Year: 2000
}
const cars5 = {
    Brand: "NISSAN",
    Color: "blue",
    Year: 2010
}
const cars6 = {...cars5,...cars4}
console.log(cars6)

const car = "AUDI"
const a = [...car]
console.log(a)

const numbers = [3,5,6,7,8];
const [b,c,d,...others] = numbers;
console.log(d);
console.log(b);
console.log(c);
console.log(others);