

class Device {
    constructor(name) {
        this.name = name
        this.on = false
    }

    turnOn() {
        if (this.on) {
            console.log(`${this.name} ja ligado`)
            return
        }
        this.on = true
    }

    turnOff() {
        if (!this.on) {
            console.log(`${this.name} ja esta desligado`)
            return
        }
    }
}

const d1 = new Device('Smartphone')
// d1.turnOn()
// d1.turnOn()

d1.turnOff()
console.log(d1)



class Smartphone extends Device {
    constructor(name, color, model) {
        super(name)
        this.color = color
        this.model = model
    }
}

const s1 = new Smartphone('Iphone', 'Preto', 'SE')
s1.turnOn()

console.log(s1)



class Ipad extends Device {
    constructor(name, size) {
        super(name)
        this.size = size
    }

    turnOn() {
        console.log(`Voce alterou o metodo ligar`)
    }

}

const i1 = new Ipad('Apple Ipad', 10.2)
i1.turnOn()
console.log(i1)