

function ValidateID(cpf) {
    Object.defineProperty(this, 'cleanCPF', {
        enumerable: true,
       get: function() {
           return cpf.replace(/\D+/g, '')
       }
    });
}


ValidateID.prototype.validate = function() {
    if(typeof this.cleanCPF === undefined) return false
    if(this.cleanCPF.length !== 11) return false
    if(this.isSequence()) return false

    const partialCpf = this.cleanCPF.slice(0, -2)
    const firstDigit = this.createDigit(partialCpf)
    const secondDigit = this.createDigit(partialCpf + firstDigit)

    const newCpf = String(partialCpf + firstDigit + secondDigit)
    
    return newCpf === this.cleanCPF
}


ValidateID.prototype.createDigit = function(partialCpf) {
    const cpfArray = Array.from(partialCpf)
    let regressive = cpfArray.length + 1;

    let total = cpfArray.reduce((ac, val) => {
        ac += (regressive * Number(val))
        regressive--
        return ac;
    }, 0)

    const digit = 11 - (total % 11)
    return digit > 9 ? 0 : digit
}

ValidateID.prototype.isSequence = function() {
   const sequence  = this.cleanCPF[0].repeat(this.cleanCPF.length)
   return sequence === this.cleanCPF
}

const cpf = new ValidateID('705.484.450-52')

if(cpf.validate()) {
    console.log('Cpf valido')
} else {
    console.log('Cpf invalido')
}