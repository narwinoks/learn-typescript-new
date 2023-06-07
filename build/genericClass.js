"use strict";
console.log("generic class ");
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
let numbers = new List(12, 13, 14, 15.16, 17);
numbers.add(19);
numbers.addMultiple(21, 22, 23, 24, 25, 26, 27, 28, 29);
console.log("number get all" + numbers.getAll());
let random = new List(1, "name", 2);
console.log(random.getAll());
