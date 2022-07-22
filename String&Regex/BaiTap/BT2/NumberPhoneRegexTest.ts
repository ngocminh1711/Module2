import {NumberPhoneRegex} from "./NumberPhoneRegex";

let numberPhoneRegex = new NumberPhoneRegex();

let validNumberPhone: string = "(84)-(0978489648)";
let invalidNumberPhone: string =  "(a8)-(22222222)";


let isValid = numberPhoneRegex.validate(validNumberPhone)
console.log("Account is " + validNumberPhone + " is valid " + isValid);

let isvalid = numberPhoneRegex.validate(invalidNumberPhone);
console.log("Account is " + invalidNumberPhone + " is invalid " + isvalid);