

//filtrar valore
//dobrar os valores
//reduzir (somar tudo)

const numbers = [1, 2, 3, 4, 7, 9, 10, 12, 24]

const evenNumbers = numbers
.filter(value =>  value % 2 === 0)
.map((value) =>  value * 2)
.reduce((acc, value) =>  acc + value)

console.log(evenNumbers)