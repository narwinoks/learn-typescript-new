interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    keyboardLight : boolean;

    constructor(name: string ,keyboardLight: boolean) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }

    on(): void {
        console.log(`${this.name} is turned on.`);
        // Add the actual implementation here
    }

    off(): void {
        console.log(`${this.name} is turned off.`);
        // Add the actual implementation here
    }
    isKeyboard :boolean =true;
}

let ass =new Asus("Asus Vivobook" ,true);
// ass.on();
console.log(ass.on());



