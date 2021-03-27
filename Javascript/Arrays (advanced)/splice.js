

const names = ['Maria', 'Jose', 'Antonio', 'Augusta', 'Gabriel']


//array.splice(indice, delete, elementos para adicionar)

//pop()   
const pop = names.splice(-1, 1)
console.log(names, pop)


const pop2 = names.splice(3, 0, 'Ana')
console.log(names, pop2)

//shift()
const shift = names.slice(0, 1)
console.log(names, shift)


//push()
const push = names.splice(names.length, 0, 'Maria')
console.log(names, push)


//unshift()
const unshift = names.splice(0, 0, 'Paulo', 'Marcelo')
console.log(names, unshift)
