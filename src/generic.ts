function getData(value: any){
    return value;
}

console.log(getData("getData").length);
console.log(getData(120).length);
// genetic
function myData<T>(value: T){
    return value;
}
console.log(myData("1200").length);
