

const elements = [
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'footer', text: 'Frase 3'},
    {tag: 'section', text: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elements.length; i++) {
    let { tag, text } = elements[i];
    let createdTag = document.createElement(tag);
    let createdText = document.createTextNode(text);

    createdTag.appendChild(createdText)
    div.appendChild(createdTag);
 }

 container.appendChild(div);