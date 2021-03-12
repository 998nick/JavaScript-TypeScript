
//alert("Oi!");
//prompt('Digite o seu nome: ')
//confirm('Deseja realmente apagar?')


const num = Number(prompt("Digite um numero: "))
const numTitle = document.getElementById('num-title')
const text = document.getElementById('text')


numTitle.innerHTML = num;

text.innerHTML = `<p>Seu numero é ${num}</p>`;
text.innerHTML +=`<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
text.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}</p>`
text.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}</p>`
text.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`
text.innerHTML += `<p>O numero com duas casas decimais é: ${num.toFixed(2)}</p>`



