//filter -> sempre retorna um array, com a mesma qtd de elementos ou menor

const numbers = [1, 2, 3, 4, 5, 6, 12, 13, 14, 10]


// let array= []

// for(let i of numbers) {
//     if(i >= 10) {
//      array.push(i)
//     }
 
// }
// console.log(array)



// function callbackFilter(value) {
//      return value >= 10; 
        
// }

// const numbersFiltered = numbers.filter(callbackFilter)


const numbersFiltered = numbers.filter(value =>  value >= 10)
console.log(numbersFiltered)

const people = [
    {name: 'Luiz', age: 30},
    {name: 'Maria', age: 35},
    {name: 'Otavio', age: 20},
    {name: 'Jose', age: 50},
];
const personLongName = people.filter( obj => obj.name.length >= 5 )
const personAge = people.filter(obj => obj.age >= 50)
const personLastLetterA = people.filter(obj =>  {
    return obj.name.toLocaleLowerCase().endsWith('a')
})
console.log(personLongName)
console.log(personAge)
console.log(personLastLetterA)

