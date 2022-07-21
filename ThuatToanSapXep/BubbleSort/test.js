
const bubbleSort = (array) => {
    let isOrdered;
    for (let i = 0; i < array.length; i++) {
        isOrdered = true;
        for (let x = 0; x < array.length - 1 - i; x++) {

            if (array[x] > array[x + 1]) {
                [array[x], array[x + 1]] = [array[x + 1], array[x]];
                    isOrdered = false;
            }console.log ('inner')
        }
        console.log ('outer')
        if (isOrdered) break;
    }

    return array;
}
let array = [1,2,3,4,5,6,7,8,10,9];
bubbleSort(array)
console.log (array)