"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.name = name;
        this.age = age;
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
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        // setter and getter
        this._email = "";
        this.phone = phone;
    }
    static getNameRole() {
        return "hero";
    }
    getRoles() {
        return {
            read: this.read,
            white: this.write
        };
    }
    set email(value) {
        if (value.length < 5) {
            this._email = "email not specified";
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "admin";
let admin = Admin.getNameRole();
console.log(admin);
// let admin = new Admin("081477084167" ,"john",20);
// admin.email="win@example.com";
// console.log(admin.email);
// // class /
// // let user = new User("john" ,"john@gmail.com");
// console.log(admin);
