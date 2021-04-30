import ValidateID from './ValidateID'

export default class GenerateID {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    formatCpf(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)   
        )
    }

    generateNewID() {
        const cpfNoDig = this.rand()
        const firstDig = ValidateID.generateDigit(cpfNoDig)
        const secondDig = ValidateID.generateDigit(cpfNoDig + firstDig)
        const newCpf = cpfNoDig + firstDig + secondDig
        return this.formatCpf(newCpf)
    }
}
