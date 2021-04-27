

function rand(min=1, max=3) {
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

//const teste = wait('smth', 1000)
//console.log(teste)



// wait('Fase 1', rand())
// .then(value => 
//     { console.log(value)
//         return wait('Fase 2', rand())
//     })
// .then(value => {
//     console.log(value)
//     return wait('Fase 3', rand())
// })    
// .then(value => {
//     console.log(value)
//     return value
// })
// .catch(error => console.log(error))



async function execute() {
    try {
        const pending = wait('Precisa de await', 1000)
        console.log(pending)

        setTimeout(() => {
            console.log(pending)
        }, 1100) 


        const fase1 = await wait('Fase 1', rand())
        console.log(fase1)
    
        const fase2 = await wait('Frase 2', rand())
        console.log(fase2)
    
        const fase3 = await wait(3, rand())
        console.log(fase3)
       
    } catch(e) {
        console.log(e)
    }
  
}

execute()

//estados Promises
//pending, fullfilled, rejected