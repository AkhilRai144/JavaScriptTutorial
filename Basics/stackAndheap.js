// Stack(Primitive)   &&   Heap(Non Primitive)

let email="google.com"
let email2nd=email
email2nd="yahoo.com"

console.log(email2nd);
console.log(email);

//heapExample
let detailOne={
    name:"sahil",
    id:10
}
let detailTwo=detailOne
detailTwo.name="Shivam"
console.log(detailOne);
console.log(detailTwo);