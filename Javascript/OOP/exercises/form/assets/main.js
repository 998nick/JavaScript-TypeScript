
class ValidateForm {
    constructor() {
        this.form = document.querySelector(".form")
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const validFields = this.isFieldsValid()
        const validPasswords = this.validPasswords()

        if(validFields && validPasswords) {
            alert('Formulario enviado')
            this.form.submit()
        }
    }

    validPasswords() {
        let valid = true
        const password = this.form.querySelector('.password')
        const repeatPassword = this.form.querySelector('.repeat-password')


        if(password.value !== repeatPassword.value) {
            valid = false
            this.createError(password, 'Campos senha e repetir senha precisam ser iguais')
            this.createError(repeatPassword, 'Campos senha e repetir senha precisam ser iguais')
        }

        if(password.value.length <= 6 || password.value.length > 12) {
            valid = this.createError(password, 'Senha precisa ter entre 6 á 12 caracteres')
        }
        return valid
    }


    isFieldsValid() {
        let valid = true

        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let field of this.form.querySelectorAll('.validate')) {
            const label = field.previousElementSibling.innerText

            if (!field.value) {
                this.createError(field, `Campo "${label}" nao pode estar em branco`)
                valid = false
            }

            if (field.classList.contains('cpf')) {
                if (!this.validateID(field)) valid = false
            }

            if (field.classList.contains('username')) {
                if (!this.validateUser(field)) valid = false
            }
        }
        return valid
    }


    validateUser(field) {
        const user = field.value
        let valid = true

        if (user.length < 3 || user.length > 12) {
            this.createError(field, 'Usuário precisa ter entre 3 á 12 caracteres')
            valid = false
        }


        if (!user.match(/^[a-zA-z0-9]+$/g)) {
            this.createError(field, 'Nome de usuário pode conter apenas letras e/ou números')
            valid = false
        }


        return valid
    }

    validateID(field) {
        const cpf = new ValidateID(field.value)

        if (!cpf.validate()) {
            this.createError(field, 'CPF invalido')
            return false
        }
        return true
    }

    createError(field, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        field.insertAdjacentElement('afterend', div)
    }
}


const validate = new ValidateForm();

