

//capturar evento submit formulario
const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputWeight = e.target.querySelector('#weight').value;
    const inputHeight = e.target.querySelector('#height').value;

    const weight = Number(inputWeight);
    const height = Number(inputHeight);

    if (!weight) {
        setResult('Peso invalido', false);
        return;
    }
    if (!height) {
        setResult('Altura invalida', false);
        return;
    }

    const imc = getImc(weight, height);
    const levelImc = getLevelImc(imc);

    const msg = `Seu Imc é ${imc} ${levelImc}`;

    setResult(msg, true);
});



function getLevelImc(imc) {
    const level = ['(Abaixo do peso)', '(Peso normal)', '(Sobrepeso)', '(Obesidade grau 1)', '(Obesidade grau 2)', '(Obesidade grau 3)'];

    if(imc >= 39.9) return level[5];

    if(imc >= 34.9) return level[4];

    if(imc >= 29.9) return level[3];  

    if(imc >= 24.9) return level[2];   

    if(imc >= 18.5) return level[1];

    if(imc < 18.5) return level[0];
}


function getImc(weight, height) {
    const imc = weight / (height * height);
    return imc.toFixed(2);
}


function createP() {
    const p = document.createElement('p');  //cria um paragrafo no html
    return p;

}


function setResult(msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = ' ';
    const p = createP();

    if(isValid){
        p.classList.add('paragraph-result')
    }else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    result.appendChild(p);
}
