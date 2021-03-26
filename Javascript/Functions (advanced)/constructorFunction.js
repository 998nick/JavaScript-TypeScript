

function Person(name, surname) {

    const ID = 12345;
    const internalMethod = function() {

    }
    
    this.name = name
    this.surname = surname

    this.method = function() {
        console.log(this.name + ': sou um método')
    }
}

const p1 = new Person('Nicole', 'Ruivo')
const p2 = new Person('Maria', 'Oliveira')

console.log(p1.name)
p1.method()