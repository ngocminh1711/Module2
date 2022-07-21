function matrixElementsSum(matrix) {
    var total = 0;
    for (var i = 0; i < matrix[0].length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) {
                break;
            }
            total += matrix[j][i];
        }
    }
    return total;
}
var matrix = [[1, 0, 1, 0],
    [0, 5, 0, 1],
    [2, 1, 3, 10]];
console.log(matrixElementsSum(matrix));
