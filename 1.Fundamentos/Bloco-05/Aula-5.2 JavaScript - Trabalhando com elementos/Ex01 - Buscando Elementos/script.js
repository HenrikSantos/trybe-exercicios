// 1. Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = "Olá";
// 4. Acesse o primeiroFilho a partir de pai.
const primeiroFilho = pai.firstChild;
// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilhoAPartirDoElementoOndeVoceEsta =
  elementoOndeVoceEsta.previousElementSibling;
// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const atencao = primeiroFilho.nextSibling;
console.log(atencao);
// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = primeiroFilho.nextElementSibling.nextElementSibling;
// 8. Agora acesse o terceiroFilho a partir de pai.
const terceiroFilhoAPartirDoPai = pai.lastChild;

// 1. Crie um irmão para elementoOndeVoceEsta.
const irmaoDoOndeVoceEsta = document.createElement("section");
irmaoDoOndeVoceEsta.innerText = "Teste irmao";
pai.appendChild(irmaoDoOndeVoceEsta);
// 2. Crie um filho para elementoOndeVoceEsta.
const filhoDoOndeVoceEsta = document.createElement("section");
elementoOndeVoceEsta.appendChild(filhoDoOndeVoceEsta);
// 3. Crie um filho para primeiroFilhoDoFilho.
const filhoprimeiroFilhoDoFilho = document.createElement("section");
elementoOndeVoceEsta.appendChild(filhoprimeiroFilhoDoFilho);
// 4. A partir desse filho criado, acesse terceiroFilho.
terceiroFilhoAPartirDofilhoprimeiroFilhoDoFilho =
  filhoprimeiroFilhoDoFilho.parentElement.nextElementSibling.nextElementSibling;
