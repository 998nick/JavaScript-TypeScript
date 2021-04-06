

function Person(name, surname) {
    this.name = name
    this.surname = surname
    //this.fullName = () => this.name + ' ' + this.surname
}

Person.prototype.fullName = function () {
    return this.name + ' ' + this.surname
}

const person1 = new Person('Antonio', 'Carlos')
console.log(person1.fullName())
const date = new Date();



//cuidado!!

// const objA = {
//     keyA: 'A'
// }

// const objB = {
//     keyB: 'B'
// }

// const objC = new Object()
// objC.keyC = 'C'


// Object.setPrototypeOf(objB, objA)
// Object.setPrototypeOf(objC, objB)
// console.log(objC.keyA)




function Product(name, price) {
    this.name = name
    this.price = price
}

Product.prototype.discount = function (porcentage) {
    this.price = this.price - (this.price * (porcentage / 100))
}

Product.prototype.increase = function (porcentage) {
    this.price = this.price + (this.price * (porcentage / 100))
}

const p1 = new Product('Camiseta', 50)
p1.increase(10)
///p1.discount(10)
console.log(p1)





const p2 = {
    name: 'Caneca',
    price: 15
}

Object.setPrototypeOf(p2, Product.prototype)
p2.discount(10)
console.log(p2)






const p3 = Object.create(Product.prototype, {
    name: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Copo'
    },
    price: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    size: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 3
    }
})

p3.discount(10)
console.log(p3)





const p4 = Object.create(Product.prototype)
p4.name = 'Toalha'
p4.price = 20
p4.increase(20)
console.log(p4)


