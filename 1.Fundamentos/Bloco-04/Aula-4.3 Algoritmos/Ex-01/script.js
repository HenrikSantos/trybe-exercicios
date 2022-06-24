// 1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:
// A soma de 35 a 105 é: X.
let valor = 0;
for (let index = 35; index <= 105; index += 1) {
  valor += index;
}
console.log(valor);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3
// Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.
let numerosDivisiveisPorTres = 0;
for (let index = 15; index <= 155; index += 1) {
  if (index % 3 == 0) {
    numerosDivisiveisPorTres += 1;
  }
}
if (numerosDivisiveisPorTres > 50) {
  console.log("é maior que 50 KEKW");
}
console.log(numerosDivisiveisPorTres);
{

  // 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
  // “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.
  
  jogadas = {
    pedra: 0,
    papel: 1,
    tesoura: 2,
  };
  
  let pessoa01 = Math.floor(Math.random() * 3)
  let pessoa02 = Math.floor(Math.random() * 3)
  console.log(pessoa01)
  console.log(pessoa02)
  
  function jogar() {
    if (pessoa01 == pessoa02) {
      console.log("empate");
    }
    
    if (pessoa01 == jogadas.papel && pessoa02 == jogadas.pedra) {
      console.log("jogador 1 ganhou");
    } else if (pessoa02 == jogadas.papel && pessoa01 == jogadas.pedra) {
      console.log("jogador 2 ganhou");
    }
    
    if (pessoa01 == jogadas.tesoura && pessoa02 == jogadas.papel) {
      console.log("jogador 1 ganhou");
    } else if (pessoa02 == jogadas.tesoura && pessoa01 == jogadas.papel) {
      console.log("jogador 2 ganhou");
    }
    
    if (pessoa01 == jogadas.pedra && pessoa02 == jogadas.tesoura) {
      console.log("jogador 1 ganhou");
    } else if (pessoa02 == jogadas.pedra && pessoa01 == jogadas.tesoura) {
      console.log("jogador 2 ganhou");
    }
  }
  jogar()
}

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
let idade = Math.floor(Math.random() * 120)
if (idade > 18){
  console.log('maior de idade')
}else{
  console.log('menor de idade')
}



// Bônus: Crie a condição utilizando operador ternário.
console.log(idade > 18 ? 'maior de idade': 'menor de idade')

// 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.
let idadeAdemar = Math.floor(Math.random() * 120)
let idadeAdriana = Math.floor(Math.random() * 120)
let idadeJulia = Math.floor(Math.random() * 120)

let pessoas = [
  [idadeAdemar, 'Ademar'], [idadeAdriana, 'Adriana'], [idadeJulia, 'Julia']
]

  pessoas.sort()
  console.log(pessoas)
  console.log(pessoas[0])