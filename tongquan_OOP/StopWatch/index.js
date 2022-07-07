class StopWatch {
    constructor() {
      this.starttime = Date.now();

    }
    start() {
        return this.starttime;
    }
    stop() {
        return this.stoptime = Date.now();
    }
    getElapsedTime() {
        return this.stoptime - this.starttime;
    }
}
let time = new StopWatch();


for (let i = 0; i <100000; i++) {
    console.log('time')
}
console.log('Time Start-----'+ time.start())
console.log('Time Stop-----'+ time.stop())
console.log('Time run-----'+ time.getElapsedTime())
