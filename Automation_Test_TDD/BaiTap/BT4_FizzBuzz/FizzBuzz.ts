export class FizzBuzz {
    num: number;
    constructor(num: number) {
        this.num = num;
    }

    print(): string {
        if (this.num >= 0) {
            if (this.num % 3 === 0) {
                if (this.num % 5 === 0) {
                    return "FizzBuzz";
                }
                return "Fizz";
            }
            if (this.num % 5 === 0) {
                return "Buzz";
            }
            let text = this.num.toString();
            return  text;
        }


    }
}