export class User{

    public name: string;
    constructor(name: string ,protected email: string) {
        this.name = name;
        this.email = email;
    }

    setName(value: string) :void{
        this.name = value;
    }

    getName() :string{
        return this.name;
    }
}

// Inheritance
class Admin extends User{
    read : boolean = true;
    write : boolean = true;

    getRoles() :{read : boolean  ,white : boolean}{
        return {
            read:this.read,
            white:this.write
        }
    }
}

let admin = new Admin("john" ,"john@gmail.com");


// class /


// let user = new User("john" ,"john@gmail.com");
console.log(admin);
