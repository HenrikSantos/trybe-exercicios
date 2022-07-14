// parte 1
// 1 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);


// 2 🚀 Crie uma função que retorne um array em ordem crescente. -- Não precisou

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b )} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉


// parte 2
// 1 Crie uma função que receba um número e retorne seu fatorial.
const fatorial = (numero) =>{
  let numeroFatorial = 1;
  for (let index = 1; index <= numero; index+=1 ) {
    numeroFatorial = numeroFatorial * index;
  }
  return numeroFatorial;
}

console.log(fatorial(4))

// 2 Crie uma função que receba uma frase e retorne a maior palavra.
const longestWord = (sentenca) => {
  const sentencaSeparada = sentenca.split(' ')
  let maiorPalavra = '';
  for (const iterator of sentencaSeparada) {
    maiorPalavra = iterator.length > maiorPalavra.length ? iterator : maiorPalavra;
  }
  return maiorPalavra
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))

// 3 🚀 Crie uma página com um contador de cliques

// 4 🚀 Crie duas funções JavaScript com as seguintes especificações:

replaceX = (nome) => {
  const frase = 'Tryber x aqui!';
  return frase.replace('x', nome);
}

descTryber = (nome) =>{
  const tryber = replaceX(nome);
  const skills = ['JavaScript', 'HTML', 'CSS'];
  const frase = `${tryber} 
  Minhas três principais habilidades são:
  -${skills[0]}
  -${skills[1]}
  -${skills[2]}`
  return frase;
}

console.log(descTryber('Henrik'))