function findFirstOccurrence(number, target) {
    var low = 0;
    var high = number.length - 1;
    var result = -1;
    while (low <= high) {
        var middle = Math.floor((high + low) / 2);
        //found the key
        if (number[middle] === target) {
            result = middle;
            return result;
        } //continue find the right
        else if (number[middle] < target) {
            low = middle + 1;
        } //continue find the left
        else {
            high = middle - 1;
        }
    }
    //target not found
    return result;
}
var data = [2, 5, 7, 9, 10, 11, 11, 20, 21, 30, 30, 35, 40, 50];
var target = 11;
var index = findFirstOccurrence(data, target);
if (index !== -1) {
    console.log("".concat(target, " \u1EDF v\u1ECB tr\u00ED ").concat(index));
}
else {
    console.log("Không tìm thấy số trong mảng");
}
