const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const list = document.getElementsByTagName('li');

list[0].addEventListener("click", selectOneTech)
list[1].addEventListener("click", selectOneTech)
list[2].addEventListener("click", selectOneTech)

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//R: a class tech tem a propriedade css "transform: translateY(-20px)" que desloca o elemento no eixo Y em -20px


// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function selectOneTech(event){
  for (const value of list) {
    value.className = ''
  }
  event.target.className = 'tech';
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keyup', changeTechText)

function changeTechText(){
  const tech = document.querySelector('.tech');
  tech.innerHTML = input.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', redirecionaParaGitHub)
function redirecionaParaGitHub(){
  window.open('https://github.com/HenrikSantos', '_blank')
}
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseenter', changeColor);

function changeColor(event){
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  event.target.style.backgroundColor = '#' + randomColor
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.