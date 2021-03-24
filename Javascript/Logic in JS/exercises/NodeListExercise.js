

const div = document.querySelector('.paragraphs')
const paragraphs = document.querySelectorAll('p')

const styleBody = getComputedStyle(document.body);
const backgroundColorBody = styleBody.backgroundColor;


for(let p of paragraphs) {
    p.style.background = backgroundColorBody;
    p.style.color = "white";
}