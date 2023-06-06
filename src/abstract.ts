abstract class Vehicle{
    abstract wheels :number;
    start():void{
        console.log("running");
    }
}


class Car extends Vehicle{
  wheels: number =4; 
}

let car = new Car();
car.start();
car.wheels;
console.log(car);


// class Motor extends Vehicle
// {

// }