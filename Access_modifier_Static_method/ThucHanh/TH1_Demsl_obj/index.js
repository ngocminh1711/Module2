"use strict";
class Application {
    constructor(name) {
        this.name = name;
        Application.count++;
    }
}
Application.count = 0;
console.log(Application.count);
let app1 = new Application('AppOne');
console.log(Application.count);
let app2 = new Application('AppTwo');
console.log(Application.count);
