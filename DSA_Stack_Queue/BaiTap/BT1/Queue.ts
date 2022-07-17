export class Queue<T> {
    container: T[] = [];

    constructor() {

    }
    enqueue(data: T): void {
        this.container.push(data)
    }
    dequeue(): T{
        return this.container.shift();
    }
}