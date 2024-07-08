let website="https//www.google.com"
console.log(website.charAt(0))//to access a character at individual palce
console.log(website[5]);

console.log(website.toUpperCase())

//comparison between string
const a="a"
const b="b"
if(a<b){
    console.log(`${a} is less than ${b}`)
}
else if(a>b){
    console.log(`${a} is greater than ${b}`)
}else{
    console.log(`${a} is equal ${b}`)
}

const s1 = "2 + 2";
console.log(eval(s1))

console.log("😁".split(""))
console.log(website.split(""))
console.log(website.endsWith("m"))
console.log(website.includes("x"))

let d = "Hello"
console.log("   hello  ".trim())
console.log(d.slice(3))

