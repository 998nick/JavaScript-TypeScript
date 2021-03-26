

function function1(first) {
    function function2(second) {
        return first + ' ' + second
    }
    return function2;
}

const helloWorld = function1('Ola')
console.log(helloWorld('mundo'))




function result(y) {
  return  function multiply(n) {
       return n * y
   };
}

const duplicate = result(2)
const triplicate = result(3)
const quadruplicate = result(4)

console.log(duplicate(2))
console.log(triplicate(3))
console.log(quadruplicate(4))