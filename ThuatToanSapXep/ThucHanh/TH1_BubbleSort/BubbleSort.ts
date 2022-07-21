export class BubbleSort {
    static list: number[] = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];




    public static bubbleSort(list: number[]) {
        let needNextPass : boolean = true;

        for (let i = 0; i < this.list.length && needNextPass; i++) {
            needNextPass = false;

            for (let j = 0; j < this.list.length + 1- i; j++) {
                if (this.list[j] > this.list[j + 1]) {
                    let temp: number = this.list[j];
                        this.list[j] = this.list[j + 1];
                        this.list[j + 1] = temp;
                    needNextPass = true;
                }
            }
        }
    }
}