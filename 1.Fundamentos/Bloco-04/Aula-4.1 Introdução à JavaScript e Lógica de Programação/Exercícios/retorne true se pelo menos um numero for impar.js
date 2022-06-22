// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

const numero01 = 2;
const numero02 = 2;
const numero03 = 2;

if (numero01 % 2 || numero02 % 2 || numero03 % 2) {
  console.log(true);
} else {
  console.log(false);
}
