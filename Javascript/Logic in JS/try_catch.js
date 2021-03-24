


// try {
//    console.log(naoExisto)
// }catch(error) {
//     console.log('Variavel nao existe')
// }

function sum(x, y) {
    if(
        typeof x !== 'number'||
        typeof y !== 'number'
      ) {
        throw('x e y precisam ser numeros')
    }
    return x + y
}

try{
    console.log(sum(1, 2))
    console.log(sum('1', 2))
} catch(error) {
    console.log('Mensagem para o usuario')
}



function returnHour(date) {
    if(date && !(date instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.')
    }

    if(!date) {
        date = new Date();
    }

    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
}


try {
    const hour = returnHour();
    console.log(hour)
} catch(e) {
  //tratar erro
} finally {
    console.log('Tenha um bom dia')
}