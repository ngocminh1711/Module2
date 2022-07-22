import {NameClassRegex} from "./NameClassRegex";

let nameClassRegex = new NameClassRegex();

let validNameClass: string[] = ['C0318G', 'C0523P'];
let inValidNameClass: string[] = ['M0318G', 'P0323A'];

for (let name of validNameClass) {
    let isValid = nameClassRegex.validate(name);
    console.log("Account is " + name + " is valid " + isValid);
}
for (let name of inValidNameClass) {
    let isValid = nameClassRegex.validate(name);
    console.log("Account is " + name + " is invalid " + isValid);
}