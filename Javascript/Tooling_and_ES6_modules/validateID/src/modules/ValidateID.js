

 export default class ValidateID {
    constructor(cpf) {
        Object.defineProperty(this, 'cleanCPF', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        });
    }

    isSequence() {
        return this.cleanCPF.charAt(0).repeat(this.cleanCPF.length) === this.cleanCPF
    }

    generateNewCPF() {
        const cpfNoDigits = this.cleanCPF.slice(0, -2)
        const digit1 = ValidateID.generateDigit(cpfNoDigits)
        const digit2 = ValidateID.generateDigit(cpfNoDigits + digit1)
        this.newCPF = cpfNoDigits + digit1 + digit2
    }

    static generateDigit(cpfNoDigits) {
        let total = 0
        let reverse = cpfNoDigits.length + 1

        for(let digitString of cpfNoDigits) {
            total += reverse * Number(digitString)
           reverse--
        }

        const digit = 11 - (total % 11)
        return digit <= 9 ? digit : '0';

    }


    validate() {
        if (!this.cleanCPF) return false
        if (typeof this.cleanCPF !== 'string') return false
        if (this.cleanCPF.length !== 11) return false
        if (this.isSequence()) return false
        this.generateNewCPF()
        


        return this.newCPF === this.cleanCPF
    }

}



const cpf = new ValidateID('797.794.450-21')

