

function returnFunction() {
    const name = 'Luiz'
    return function (){
       return name
    };
}

const x = returnFunction('Antonio');
const y =  returnFunction('Maria');

console.dir(x)
console.dir(y)

console.log(x(), y())