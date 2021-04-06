

const list = [
    { id: 3, name: 'Luiz' },
    { id: 1, name: 'Maria' },
    { id: 2, name: 'Felipe' },
]


//const newPeople = {};
// for(const person of list)  {
//     const { id } = person;
//     newPeople[id] = { ...person }
// }


const newPeople = new Map();

for (const person of list) {
    const { id } = person;
    newPeople.set(id, { ...person })
}

console.log(newPeople.get(2))


// for(const [identifier, {id, name}] of newPeople) {
//     console.log(identifier, id, name)
// }


// for(const people of newPeople.keys()) {
//     console.log(people)
// }


// for(const people of newPeople.values()) {
//     console.log(people)
// }


newPeople.delete(2)
console.log(newPeople)
