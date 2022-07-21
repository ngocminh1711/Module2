function countNumber(array, value) {
    var arrayCompare = [];
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            arrayCompare.push(i);
            count++;
        }
    }
    return count;
}
var countNumbers = countNumber([5, 1, 1, 2, 3, 4, 5, 5, 6], 5);
console.log(countNumbers);
