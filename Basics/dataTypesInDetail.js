//primitive datatypes
//String Null Number Symbol BigInt Boolean UnDefined

let name="JavaScript"
let value=null
const studentId=5590
const accountNumber=Symbol(6386328)
let population=8887489698468969846499n
let choice=true
let x;

console.log(typeof(name))
console.log(typeof(value))
console.log(typeof(studentId))
console.log(typeof(accountNumber))
console.log(typeof(population))
console.log(typeof(choice))
console.log(typeof(x))

//non primitive datatypes(Reference type or Object types)
//Arrays Object Function

let studentName=["Bhoomi","Sweeta","Akash"]
console.log(typeof(studentName));

let d={
    name:"akhil",
    id:12
}
console.log(typeof(d));

function fun(){
    console.log("Hello World!");
}
console.log(fun());
console.log(typeof(fun));