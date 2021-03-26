

function createCalculator() {
    return {
        display: document.querySelector('.display'),

        init() {
            this.buttonClick();
            this.enterKey();
        },

        enterKey() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.makeCount();
                }
            })
        },

        clearDisplay() {
            this.display.value = '';
        },

        delOne() {
            this.display.value = this.display.value.slice(0, -1)
        },

        makeCount() {
            let count = this.display.value;

            try {
                count = eval(count);

                if (!count) {
                    alert('Conta invalida');
                    return
                }

                this.display.value = count;

            } catch (e) {

                if (!count) {
                    alert('Conta invalida');
                    return
                }
            }
        },

        buttonClick() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.delOne();
                }

                if (el.classList.contains('btn-eq')) {
                    this.makeCount();
                }
            });
        },

        btnForDisplay(value) {
            this.display.value += value;
        },
    };
}



const calculator = createCalculator();
calculator.init();