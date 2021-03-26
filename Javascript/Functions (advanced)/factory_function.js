
function createPerson(name, surname, a, b) {
    return {
        name,
        surname, 

        //getter
        get completeName() {
            return `${this.name} ${this.surname}`
        },

        //setter
        set completeName(value) {
            value = value.split(' ');
            this.name = value.shift();
            this.surname = value.join(' ');
        },

        speak(subject = 'nao esta falando') {
            return `${this.name} ${subject}`
        },
        height: a,
        weight: b, 

        //getter
        get imc() {
            const index = this.weight / (this.height * this.height)
            return index.toFixed(2)
        }
    }
}

const p1 = createPerson('Pedro', 'Ruivo', 1.70, 67)
p1.completeName = 'Nicole Ruivo';
console.log(p1.name)
console.log(p1.surname)
console.log(p1.speak())
