// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
let n = 5;
let horizontal = "";
for (let index = 0; index < n; index += 1) {
  for (let index2 = 0; index2 < n; index2 += 1) {
    horizontal += "*";
  }
  console.log(horizontal);
  horizontal = "";
}
// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
let n2 = 5;
let horizontal2 = "";

for (let index = 0; index < n2; index += 1) {
  horizontal2 += "*";
  console.log(horizontal2);
}
