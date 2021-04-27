

function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
      if(typeof msg !== 'string') reject('Valor invalido')
    setTimeout(() => {
        resolve(msg)
    }, time)
  } )
}


wait('Frase 1', rand(1, 3))
.then(answer => {
    console.log(answer)
    return wait('Frase 2', rand(1, 3))
})
.then(answer => {
    console.log(answer)
    return wait(2222, rand(1, 3))
})
.then(answer => {
    console.log(answer)
})
.catch( e => {
    console.log('Erro:', e)
})


// wait('Frase 2', rand(1, 3))
// wait('Frase 3', rand(1, 3))