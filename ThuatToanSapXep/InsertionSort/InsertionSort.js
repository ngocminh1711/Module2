function insertionSort(inputArr) {
    var n = inputArr.length;
    for (var i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        var current = inputArr[i];
        // The last element of our sorted subarray
        var j = i - 1;
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j + 1] = inputArr[j];
            j--;
        }
        inputArr[j + 1] = current;
    }
    return inputArr;
}
var inputArr = [5, 2, 4, 6, 1, 3,];
console.log(insertionSort(inputArr));
