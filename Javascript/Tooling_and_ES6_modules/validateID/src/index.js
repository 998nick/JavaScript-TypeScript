import GenerateID from './modules/GenerateID'
import './assets/css/style.css'


(function () {
    const generate = new GenerateID()
    const generatedCpf = document.querySelector('.generate-cpf')
    generatedCpf.innerHTML = generate.generateNewID()
})()