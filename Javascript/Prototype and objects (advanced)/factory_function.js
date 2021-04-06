


const speak = {
    speak() {
        console.log(`${this.name} esta falando`)
    }
}

const eat = {
    eat() {
        console.log(`${this.name} esta comendo`)
    }
}

const drink = {
    drink() {
        console.log(`${this.name} esta bebendo`)
    }
}

const personProto = Object.assign({}, speak, eat, drink)

function createPerson(name, surname) {
    return Object.create(personProto, {
        name: { value: name },
        surname: { value: surname }
    })
}


const p1 = createPerson('Luiz', 'Antonio')
const p2 = createPerson('Maria', 'Luiza')

