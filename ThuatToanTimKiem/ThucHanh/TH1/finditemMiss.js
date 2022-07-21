var array = [1, 2, 2, 1, 3, 4, 5];
function finditemMiss(array) {
    var arrayCompare = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] == array[j] && arrayCompare.indexOf(array[i]) == -1) {
                arrayCompare.push(array[i]);
                break;
            }
        }
    }
    return count;
}
console.log(finditemMiss(array));
console.log();
