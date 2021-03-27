

const numbers = [1, 2, 3, 4, 5, 11, 12, 50, 34]

const numbersDouble = numbers.map(value => value * 2)
console.log(numbersDouble)

const people = [
    {name: 'Luiz', age: 30},
    {name: 'Maria', age: 35},
    {name: 'Otavio', age: 20},
    {name: 'Jose', age: 50},
];


const names = people.map(obj => obj.name)
console.log(names)

const removekeyName = people.map(obj => ({ age : obj.age }))
console.log(removekeyName)

//cria uma chave de id
//muda o obj original
// const addKeyID = people.map( (obj, index) => {
//     obj.id = index + 1
//     return obj
// })


//cria um novo obj
const addKeyID = people.map((obj, index) => {
    const newObj = {...obj}
    newObj.id = index
    return newObj;

})

console.log(addKeyID)
console.log(people)