import {Patient} from "./Patient";

export class Queue<T> {
    container: T[] = [];
    data: T;


    constructor() {
    }

    enqueue(data: T): void {
        this.container.push(data);
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return null;
        }
        let min = this.container[0];
        let minIndex = -1;
        this.container.forEach((data, index) => {
            if (data[0] < min[0]) {
                min = data;
                minIndex = index;
            }
        })
        this.container.splice(minIndex, 1);
        return min[1]
    }

    isEmpty(): boolean {
        return this.container.length === 0;
    }


}