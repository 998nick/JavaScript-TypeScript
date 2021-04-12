

class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    speak() {
        console.log(`${this.name} esta falando`)
    }

    drink() {
        console.log(`${this.name} esta bebendo`)
    }
}

const p1 = new Person('Ana', 'Julia')
const p2 = new Person('Antonio', 'Silva')
console.log(p1)
console.log(p2)