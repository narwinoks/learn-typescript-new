"use strict";
class Asus {
    constructor(name, keyboardLight) {
        this.isKeyboard = true;
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log(`${this.name} is turned on.`);
        // Add the actual implementation here
    }
    off() {
        console.log(`${this.name} is turned off.`);
        // Add the actual implementation here
    }
}
let ass = new Asus("Asus Vivobook", true);
// ass.on();
console.log(ass.on());
