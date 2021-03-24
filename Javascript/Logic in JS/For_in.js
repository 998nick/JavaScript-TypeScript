

const fruits = ['Pera', 'Maca', 'Uva'];

for(let fruit in fruits) {
    console.log(fruits[fruit], fruit)
}

const person = {
  name: 'Jose',
  surname: 'Oliveira',
  age: 24
};

for(let key in person) {
console.log(key, person[key])
}

//person.name
//person['name']