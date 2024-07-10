let number=[1,2,3,4,5,6]
console.log(number[3])
console.log(number)
console.log(number.length)
console.log(Object.keys(number))

const name=["hero","spiderman","batman"]
console.log(name.indexOf('batman'))
console.log(name.join('-'))

const animal=["Cat"]
animal.push('Dog','Elephant','Tiger','Pigeon')
console.log(animal)
console.log(animal.slice(1,3))
console.log(animal)
console.log(animal.splice(1,3))
console.log(animal)

let id=[50,60,70,80]
console.log(id.pop())
console.log(id.unshift(13))
console.log(id)
console.log(id.shift())
console.log(id)
console.log(id.includes(40))
console.log(id.indexOf(50))

let newArr=id.join()
console.log(typeof newArr)

