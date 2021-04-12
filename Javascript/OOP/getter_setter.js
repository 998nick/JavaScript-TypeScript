const _speed = Symbol

class Car {
    constructor(brand) {
        this.brand = brand
        this[_speed] = 0;

    }

    set speed(value) {
        if(typeof value !== 'number')return
        if(value >= 100 || value <= 0) return

        this[_speed] = value
    }

    get speed() {
        return this[_speed]
    }

    speedUp() {
       if(this[_speed] >= 100) return;
        this[_speed]++ 
    }

    break() {
        if(this[_speed] <= 0) return;
        this[_speed]-- 
    }
}

const c1 = new Car('Fiat')

for(let i = 0; i <= 200; i++) {
    c1.speedUp()
}

console.log(c1)


class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return this.name + ' ' + this.surname
    }

    set fullName(value) {
       value = value.split(' ')
       this.name = value.shift()
       this.surname = value.join(' ')
    }
}


const p1 = new Person('Nicole', 'Ruivo')
console.log(p1.name)
console.log(p1.surname)

p1.fullName = 'Paulo Rodrigues'
console.log(p1.fullName)