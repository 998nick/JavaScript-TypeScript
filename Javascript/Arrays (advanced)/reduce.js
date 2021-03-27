

const numbers = [1, 2, 3, 4, 5, 6, 12, 13, 14, 10]


//soma todos os numeros 
//(se nao passar o acumulador no final ele usa o primeiro elemento do array como valor inicial do contador)
const totalNum = numbers.reduce(function(accumulator, value) {
    accumulator += value;
     return accumulator
}, 0)
console.log(totalNum)



//retorna pares    (filter)
const totalEven = numbers.reduce((accumulator, value) => {
     if(value % 2 === 0) accumulator.push(value)
     return accumulator;
}, [])

console.log(totalEven)





const people = [
    {name: 'Luiz', age: 30},    
    {name: 'Maria', age: 35},   
    {name: 'Otavio', age: 20},  
    {name: 'Jose', age: 50},
];



const greaterAge = people.reduce((accumulator, value) => {
    if(accumulator.age > value.age) return accumulator
    return value
})

console.log(greaterAge)
