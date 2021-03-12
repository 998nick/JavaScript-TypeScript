

function sayHi(name) {
    console.log(`Oi ${name}`)
}

sayHi('Nicole')

//funcao sem retorno

//--------------------------------

function sum(x=1, y=1) {
    const result = x + y
    return result
}

console.log(sum(3, 5))

//funcao com retorno

//-------------------------------


//const root = n => n ** 0.5;
const root = (n) => {
   return n ** 0.5;
};

console.log(root(16))

//arrow function