// 1.Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

const h1 = document.createElement("h1");
h1.innerText = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(h1);

// 2. Adicione a tag main com a classe main-content como filho da tag body;
const main = document.createElement("main");
main.classList.add("main-content");
document.body.appendChild(main);

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const section = document.createElement("section");
section.classList.add("center-content");
main.appendChild(section);

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const p = document.createElement("p");
section.appendChild(p);
p.innerText = "Parágrafo filho da section";

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const sectionLeft = document.createElement("section");
sectionLeft.classList.add("left-content");
main.appendChild(sectionLeft);
// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const sectionRight = document.createElement("section");
sectionRight.classList.add("right-content");
main.appendChild(sectionRight);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const img = document.createElement("img");
img.src = "https://picsum.photos/200";
img.classList.add = "small-image";
sectionLeft.appendChild(img);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const ul = document.createElement("ul");
sectionRight.appendChild(ul);

for (let index = 1; index <= 10; index++) {
  const li = document.createElement("li");
  li.innerText = index;
  console.log(li);
  ul.appendChild(li);
}

// 9. Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let index = 0; index < 3; index++) {
  const h3 = document.createElement("h3");
  h3.innerText = 'teste';
  main.appendChild(h3);
}


// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// 1. Adicione a classe title na tag h1 criada;
h1.classList.add('title');

// 2. Adicione a classe description nas 3 tags h3 criadas;
main.lastElementChild.classList = 'description'
main.lastElementChild.previousElementSibling.classList = 'description'
main.lastElementChild.previousElementSibling.previousElementSibling.classList = 'description'

// 3. Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
const leftContent = document.getElementsByClassName('left-content');
main.removeChild(leftContent[0]);

// 4. Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
const rightContent = document.getElementsByClassName('right-content');
rightContent[0].style.marginRight = 'auto';

// 5. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
const centerContent = document.getElementsByClassName('center-content');
centerContent[0].style.backgroundColor = 'green'

// 6. Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
ul.removeChild(ul.lastChild);
ul.removeChild(ul.lastChild)
