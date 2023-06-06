"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, email) {
        this.email = email;
        this.name = name;
        this.email = email;
    }
    setName(value) {
        this.name = value;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
// Inheritance
class Admin extends User {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    getRoles() {
        return {
            read: this.read,
            white: this.write
        };
    }
}
let admin = new Admin("john", "john@gmail.com");
// class /
// let user = new User("john" ,"john@gmail.com");
console.log(admin);
