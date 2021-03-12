
// Falsy

// 0
// ''  "" ``
// null  / undefined
// NaN

function sayHi() {
    return '0i'
}

let execute;

console.log(execute && sayHi())

console.log( 0 || '' || null || 'abc' || true )