
function count(operator, digit, ...numbers) {
    for(let number of numbers) {
        if(operator === '+') digit += number
        if(operator === '-') digit -= number
        if(operator === '/') digit /= number
        if(operator === '*') digit *= number
     
    }

    console.log(digit)
}

count('+', 1, 30, 40 ,50, 50)


//rest operator funciona em qualquer tipo de funcao