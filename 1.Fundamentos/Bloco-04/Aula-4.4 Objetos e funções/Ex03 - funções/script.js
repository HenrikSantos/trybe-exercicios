// Parte I - Objetos e For/In

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};
console.log(`Bem vinda, ${info.personagem}`);
// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
info.recorrente = "Sim";
console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
for (index in info) {
  console.log(index);
}
// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
for (index in info) {
  console.log(info[index]);
}
// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console
for (index in info) {
  if (info.recorrente == info2.recorrente && index == "recorrente") {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[index], "e", info2[index]);
  }
}

// Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};
// 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
console.log(
  `O livro favorito de ${leitor.nome + " " + leitor.sobrenome} se chama ${
    leitor.livrosFavoritos[0].titulo
  }`
);

// 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:
leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
});
//  8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
console.log(
  `${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`
);

// Parte II - Funções

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalindromo(palavra) {
  let palavraInversa = "";

  for (index = palavra.length - 1; index != -1; index--) {
    palavraInversa += palavra[index];
  }
  console.log(palavraInversa);
  if (palavra == palavraInversa) {
    return true;
  }
  return false;
}
result = verificaPalindromo("anana");
console.log(result);
// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// function retornaMaiorIndice(array){
array = [2, 3, 6, 7, 10, 1];
function retornaIndiceDoMaiorValor(array) {
  return array.indexOf(Math.max.apply(null, array));
}
console.log(retornaIndiceDoMaiorValor(array));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
array2 = [2, 4, 6, 7, 10, 0, -3];
function retornaIndiceDoMenorValor(array2) {
  return array2.indexOf(Math.min.apply(null, array2));
}
console.log(retornaIndiceDoMenorValor(array2));
// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
array3 = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
function descobreMaiorNome(array) {
  let numeroDeCaracteres = 0;
  let numeroDeCaracteresMaiorNome = 0;
  let maiorNome = "";

  for (index of array) {
    for (index2 of index) {
      numeroDeCaracteres += 1;
    }
    if (numeroDeCaracteres > numeroDeCaracteresMaiorNome) {
      numeroDeCaracteresMaiorNome = numeroDeCaracteres;
      maiorNome = array.indexOf(index);
    }
    numeroDeCaracteres = 0;
  }
  return array[maiorNome];
}
console.log(descobreMaiorNome(array3));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
array4 = [2, 3, 2, 5, 8, 2, 3];
function numeroDeRepeticoes(array) {
  let numeroDeRepeticoesDoMaior = 0;
  let repetiuQuantasVezes2 = 0;
  let numeroQueMaisRepete = 0;
  for (index of array) {
    for(index2 of array){
      if(index2 == index){
        repetiuQuantasVezes2 += 1;
      }
    }
    if(repetiuQuantasVezes2 > numeroDeRepeticoesDoMaior){
      numeroQueMaisRepete = index;
      numeroDeRepeticoesDoMaior = repetiuQuantasVezes2;
    }
    repetiuQuantasVezes2 = 0
  }
  return numeroQueMaisRepete
}
console.log(numeroDeRepeticoes(array4))

// 6- Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
function somatorioAteONumero(numeroASerSomado){
  let soma=0;
  if(numeroASerSomado < 0 || !Number.isInteger(numeroASerSomado)){
    return "somente numeros naturais"
  }
  for(index = 0; index <= numeroASerSomado; index+=1){
    console.log(index)
    soma += index;
  }
  return soma
}
console.log(somatorioAteONumero(5))
// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
function verificaFinalIgualComeco(word, ending){
  let result = false;
  for(index = 0; index < ending.length; index++){
    if(word[word.length-index-1] == ending[ending.length-index-1]){
      result = true;
    }else{
      result = false
      return result
    }
    return result
  }
}
console.log(verificaFinalIgualComeco('joaofernando', 'fernan'))