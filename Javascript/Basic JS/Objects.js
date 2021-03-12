

const plants = {
    flower : 'rosa',
    vegetable: 'pepino',
    tree: 'carvalho',
    category: [
        'sementes',
        'jardim'
    ],
    isAvailable() {
        console.log(`${this.flower} é da categoria ${this.category[1]}`)
    }
}

console.log(plants.flower)
console.log(plants.category)
console.log(plants.isAvailable())

//--------------------------------

//factory function

function createPerson(name, surname, age) {
    return {
        name,
        surname,
        age
    };
}

const persona = createPerson('Nicole', 'Ruivo', 23)
console.log(persona)