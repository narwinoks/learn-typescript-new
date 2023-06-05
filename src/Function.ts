// function
// tipe data balikan function

function getName (): string {
    return "hello my name world!";
}

console.log(getName());

function getAge (): number {
    return 20;
}

console.log(getAge());

function getAddress (): string {
    return ""
}

function printName (): void {
    console.log("void not returned");
    
}

// default parameters
const fullName =(firstName : string, lastName : string= "default") : string =>{
    return firstName + " " + lastName
}

console.log(fullName("win"));

// optional parameters

const getUmur = (name : string,age?: number): string =>{
    return "name" + name + "  " +"umur" +age
}

console.log(getUmur("winarno" ,12));

