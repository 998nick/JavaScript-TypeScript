
const name = 'Luiz'
const surname = 'Oliveira'
const age = 30


function sum(x, y) {
    return console.log(x + y)
}

export default (x, y) => x * y


 class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }
}

//sum as default
export  { name, surname, age, Person, sum}