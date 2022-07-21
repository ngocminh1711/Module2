function calculator(number1, number2, operator) {
    let result;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    }
    else if (operator != '+' && operator != '-' && operator != '*' && operator != '/') {
        throw new RangeError('The operator must be an +,-,*,/ ')
    }
    return result;
}
try {
    calculator(20,10,'-')
}
catch (error){
    if (error instanceof RangeError) {
        console.log(error.message)
    }
    else {

    }
}