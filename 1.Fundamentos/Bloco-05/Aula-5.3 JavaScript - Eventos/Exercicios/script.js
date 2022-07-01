function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:

//  Crie um calendário dinamicamente.
//  O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

//      Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

//  A tag <ul> deve conter o id 'days';
//  Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
//  Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
//  Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
// const mes = document.createElement("ul");
// mes.id = "days";
// document.body.appendChild(mes);
const mes = document.querySelector("#days");
for (const value of decemberDaysList) {
  const createDays = document.createElement("li");
  createDays.innerText = value;
  createDays.classList = "day";
  if (value === 24 || value === 25 || value === 31) {
    createDays.classList.add("holiday");
  }
  if (value === 4 || value === 11 || value === 18 || value === 25) {
    createDays.classList.add("friday");
  }
  mes.appendChild(createDays);
}

// Exercício 2:

//Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
//  Sua função deve receber um parâmetro com a string 'Feriados'
//  Adicione a este botão a ID "btn-holiday"
//  Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
const buttonsContainer = document.querySelector(".buttons-container");

function createHolidayButton(stringFeriados) {
  const newButton = document.createElement("button");
  newButton.id = "btn-holiday";
  newButton.innerText = stringFeriados;
  buttonsContainer.appendChild(newButton);
  return newButton;
}

const buttonHoliday = createHolidayButton("Feriados");

// Exercício 3:

//Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
//    Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"

//    👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

const holiday = document.getElementsByClassName("holiday");
function changeHolidayBackground() {
  for (let index = 0; index < holiday.length; index++) {
    const element = holiday[index];
    element.classList.toggle("activeHoliday");
  }
}

buttonHoliday.addEventListener("click", changeHolidayBackground);

//Exercício 4:
//Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".

//  Adicione a esse botão o ID "btn-friday";
//  Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".
function createFridayButton(stringFriday) {
  const newButton = document.createElement("button");
  newButton.id = "btn-friday";
  newButton.innerText = stringFriday;
  buttonsContainer.appendChild(newButton);
  return newButton;
}
const buttonFriday = createFridayButton("Sexta-feira");

// Exercício 5:
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.

//     👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

buttonFriday.addEventListener("click", changefridayText);

// console.log(fridayCopy[1].innerText)
const friday = document.getElementsByClassName("friday");
const sextas = ["4", "11", "18", "25"];

function changefridayText() {
  for (let index = 0; index < friday.length; index++) {
    if (friday[index].innerText === sextas[index]) {
      friday[index].innerText = "hoje é Sexta-Feira";
    } else {
      friday[index].innerText = sextas[index];
      friday[index].innerText;
    }
  }
}

// Exercício 6:
//
//  Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
//    Dica - Propriedade: event.target.

const day = document.querySelectorAll(".day");
day.forEach((element) => {
  element.addEventListener("mouseover", zoomIn);
});
day.forEach((element) => {
  element.addEventListener("mouseout", zoomIn);
});
function zoomIn(event) {
  event.target.classList.toggle("zoomIN");
}
//não precisou de 2 mas se for obrigatório basta criar uma nova que faça exatamente a mesma coisa que a zoomIN

// Exercício 7:

//  Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//    O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".


const myTasks = document.querySelector(".my-tasks");

function createTask(newTask) {
  const newElementTask = document.createElement("span");
  newElementTask.innerText = newTask;
  myTasks.appendChild(newElementTask);
}
createTask("projeto");

// Exercício 8:

//Implemente uma função que adicione uma legenda com cor para a tarefa.

//  Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.

//    O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//    O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function createTaskColor(color) {
  const colorDiv = document.createElement("div");
  colorDiv.classList.add("task");
  colorDiv.style.backgroundColor = color;
  myTasks.appendChild(colorDiv);
  return colorDiv;
}
currentTask = createTaskColor("red");

// Exercício 9:

// Implemente uma função que selecione uma tarefa.
//  Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
//  Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

currentTask.addEventListener("click", taskSelected);
function taskSelected(event) {
  if (event.target === currentTask) {
    currentTask.classList.toggle("task-selected");
  }
}

// Exercício 10:

//     Implemente uma função que atribua a cor da tarefa ao dia do calendário.
//         Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
//         Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)

day.forEach((item) => {
  item.addEventListener("click", dayTaskSelected);
});
function dayTaskSelected(event) {
  if (currentTask.classList.length !== 1) {
    if (event.target.style.color === currentTask.style.backgroundColor) {
      event.target.style.color = "rgb(119,119,119)";
    } else {
      event.target.style.color = currentTask.style.backgroundColor;
    }
  }
}

// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

//     Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
//     Ao pressionar a tecla "enter" o evento também deverá ser disparado.

const compromissos = document.querySelector('#compromissos')
const taskInput = document.querySelector('#task-input')
const btnAdd = document.querySelector('#btn-add')

btnAdd.addEventListener('click', function(){
  if(taskInput.value !== ''){
    createCompromisso(taskInput.value)
  }else{
    window.alert('need a value')
  }
})

function createCompromisso(txtCompromisso){
const newCompromisso = document.createElement('p')
newCompromisso.innerText = txtCompromisso;
compromissos.appendChild(newCompromisso)
}