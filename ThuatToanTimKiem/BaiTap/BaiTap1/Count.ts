function countNumber(array: number[], value: number) {
    let arrayCompare = [];
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value)
        {
            arrayCompare.push(i)
            count++;
        }
    }
    return count;
}
let countNumbers = countNumber([5, 1, 1, 2, 3, 4, 5, 5, 6], 5);
console.log(countNumbers)
