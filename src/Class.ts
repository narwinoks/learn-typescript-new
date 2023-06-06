export class User{

    public name: string;
    constructor(name: string ,protected age: number) {
        this.name = name;
        this.age = age;
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
    phone : string;
    // setter and getter
    private _email : string ="";
    static getRoleName : string = "admin";


    constructor (phone :string ,name:string,age:number){
        super(name,age)
        this.phone = phone;
    }

    static getNameRole(){
        return "hero"
    }
    getRoles() :{read : boolean  ,white : boolean}{
        return {
            read:this.read,
            white:this.write
        }
    }

    set email(value:string){
        if (value.length < 5) {
            this._email = "email not specified"
        }else{
            this._email = value;
        }
    }
    get email() :string{
        return this._email;
    }
}


let admin = Admin.getNameRole();
console.log(admin);


// let admin = new Admin("081477084167" ,"john",20);
// admin.email="win@example.com";
// console.log(admin.email);



// // class /


// // let user = new User("john" ,"john@gmail.com");
// console.log(admin);