

function Calculator() {

    this.display = document.querySelector('.display');


    this.init = () => {
        this.getClick();
        this.getEnter();
}

    this.getEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13){
            this.makeCount();
            }
        });
    }

    this.getClick = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear(el);
            if(el.classList.contains('btn-del')) this.del(el);
            if(el.classList.contains('btn-eq')) this.makeCount(el);
        })
    }

    this.addNumDisplay = el =>  {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.clear = () => this.display.value = ''

    this.del = () => this.display.value = this.display.value.slice(0, -1)

    this.makeCount = () => {
        
        try {
            const count = eval(this.display.value)

            if(!count) {
                alert('Conta invalida')
                return
            }
            this.display.value = count

        } catch(e) {
            alert('Conta invalida')
            return
        }
    }

}


const calculator = new Calculator();
calculator.init();
