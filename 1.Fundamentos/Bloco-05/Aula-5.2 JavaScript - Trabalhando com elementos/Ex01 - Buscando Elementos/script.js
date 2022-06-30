// arquivo script.js

const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho')
const pai = document.querySelector('#pai')

// 1. Acesse o elemento elementoOndeVoceEsta. 
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta')
elementoOndeVoceEsta.parentElement.style.color = 'red'

primeiroFilhoDoFilho.innerText = 'Olá este é o primeiroFilhoDoFilho'
pai.firstChild