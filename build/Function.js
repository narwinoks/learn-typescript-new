"use strict";
// function
// tipe data balikan function
function getName() {
    return "hello my name world!";
}
console.log(getName());
function getAge() {
    return 20;
}
console.log(getAge());
function getAddress() {
    return "";
}
function printName() {
    console.log("void not returned");
}
// default parameters
const fullName = (firstName, lastName = "default") => {
    return firstName + " " + lastName;
};
console.log(fullName("win"));
// optional parameters
const getUmur = (name, age) => {
    return "name" + name + "  " + "umur" + age;
};
console.log(getUmur("winarno", 12));
