console.log("generic class ");


class List <T> {
private data :T[];
constructor (...elements :T[]){
    this.data = elements
}
add (element :T) :void{
    this.data.push(element);
}

addMultiple (...elements :T[]) :void{
this.data.push(...elements);
}
getAll () : T []{
 return   this.data
}
}

let numbers = new List<number>(12,13,14,15.16,17);
numbers.add(19);
numbers.addMultiple(21,22,23,24,25,26,27,28,29)
console.log("number get all" + numbers.getAll());

let random = new List<number| string>(1,"name",2);
console.log(random.getAll());


