

const numbers = [ 1, 2, 3, 4, 5, 6, 7 ]

let i = 0;

while(i < numbers.length){
let number = numbers[i]

    if(number === 2) {
        i++;
        continue;
    }

    if(number === 5) {
        i++;
        break;
    }

    i++;

    console.log(number)
}