//For classico - Geralmente com iteraveis (array ou strings)
//For in - Retorna o indice ou chave (string, array ou objetos)
//For of - Retorna o valor em si (iteraveis, arrays ou strings)

const names = ['Marcelo', 'Ana', 'Maria'];

for(let value of names) {
   console.log(value)
}


names.forEach(function(value, index, array) {
console.log(value, index)
})