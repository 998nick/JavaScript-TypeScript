//Atribuicao via desestruturacao


//...rest, ...spread

const numbers = [1, 2, 3, 4, 5]
const[um , dois, tres, ...something] = numbers;

const skipValues = [um, , dois, ,]

console.log(um, dois, tres)
console.log(skipValues)
console.log(something)

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix[1][2])

//-----------------------


const person = {
    name: 'Luiz',
    age: 30,
    adress: {
        street: 'Avenida Brasil',
        number: 300
    }
}

//const { name = 'Nao existe', age, adress: location } = person   
//colocando um valor default caso a variavel nao exista ''
//mudando o valor da chave
//console.log(name, age, location)


const { adress: { street, number} } = person
console.log(street, number)

const { name, ...rest} = person
console.log(name, rest)



