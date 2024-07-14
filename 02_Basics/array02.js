let animal=["dog","cat","tiger"]
let birds=["crow","pigeon","peacock"]
animal.push(birds)
console.log(animal)
console.log(animal[3][2])
let newArray=animal.concat(birds)
console.log(newArray)
const newArray2=[...animal,...birds]
console.log(newArray2)

const example=[1,2,3,[3,4,5],6,[7,[8,9,[10,11],12,13],14],15,16]
const example2=example.flat(Infinity)
console.log(example2)

console.log(Array.isArray("AKHILESH"))
console.log(Array.from("Akhilesh"))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))