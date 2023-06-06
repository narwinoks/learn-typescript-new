"use strict";
class Vehicle {
    start() {
        console.log("running");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
let car = new Car();
car.start();
car.wheels;
console.log(car);
// class Motor extends Vehicle
// {
// }
