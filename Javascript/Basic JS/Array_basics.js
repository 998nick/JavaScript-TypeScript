
const students = ['Joao', 'Maria', 'Carlos']


students.push('Ana')
//inserir elemento para o final do array

students.pop()
//apagar o ultimo elemento do array

students.unshift('Nicole')
//inserir elemento no comeco do array

students.shift()
//apagar o primeiro elemento do array

//delete students[2]
//deleta o elemento porem mantem o indice (fica undefined)

const a = students.slice(0, 1)
console.log(a)

console.log(students)
