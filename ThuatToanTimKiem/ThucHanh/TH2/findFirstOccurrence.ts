function findFirstOccurrence(number: number[], target: number): number {
    let low: number = 0;
    let high: number = number.length - 1;
    let result: number = -1;

    while (low<= high) {
        let middle = Math.floor((high + low) / 2);

        //found the key
        if (number[middle]  === target) {
            result = middle
            return result;

        }//continue find the right
        else if (number[middle] < target) {
            low = middle + 1;
        }//continue find the left
        else {
            high = middle - 1;
        }
    }
    //target not found
    return result;
}


let data: number[] = [2, 5, 7, 9, 10, 11, 11, 20, 21, 30, 30, 35, 40, 50];
let target: number = 11;
let index: number = findFirstOccurrence(data, target);

if (index !== -1) {
    console.log(`${target} ở vị trí ${index}`)

}
else {
    console.log("Không tìm thấy số trong mảng");
}