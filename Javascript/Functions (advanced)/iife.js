
//IIFE ->Immediately  invoked function expression

(function() {
    const name = 'Antonio'
    console.log(name)
})()
 

(function(age, name) {
    const surname = 'Oliveira'

    function createName(name) {
       return name + ' ' + surname
    }

    function sayName() {
        console.log(createName('Jose'))
    }
    sayName();

    console.log(age, name)
    
})(24, 'Paulo')

