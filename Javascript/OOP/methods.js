

class remoteControl {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    //metodo de instancia
    increaseVolume() {
        this.volume += 2;
    }

    decreaseVolume() {
        this.volume -= 2
    }

    //metodo estatico
    static changeBattery() {
        console.log('Nova pilha')
    }
}


const control1 = new remoteControl('LG')
control1.increaseVolume()

console.log(control1)
remoteControl.changeBattery()

