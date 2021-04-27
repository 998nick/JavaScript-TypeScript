

function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(typeof msg !== 'string'){
            reject('Valor invalido')
            return
           }
           resolve(msg)
    }, time)
  } )
}

//Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     //'Primeiro valor',
//     wait('Promise 1', rand(1, 5)),
//     wait('Promise 2', rand(1, 5)),
//     wait('Promise 3', rand(1, 5)),
//     wait(1000, rand(1, 5))
// ]

// Promise.race(promises)
// .then(value => console.log(value))
// .catch(error => console.log(error))


function downloadPage() {
    const inCache = true;

    if(inCache) {
        return Promise.resolve('Pagina em cache')
    }else {
        return wait('Baixando a pagina', 2000)
    }
}

downloadPage()
.then(pageData => console.log(pageData))
.catch(error => console.log('Erro', error))

