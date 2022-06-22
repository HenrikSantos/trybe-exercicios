// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo01 = 60;
const angulo02 = 60;
const angulo03 = 60;
if (angulo01 < 0 || angulo02 < 0 || angulo03 < 0) {
  console.log(false);
} else if (angulo01 + angulo02 + angulo03 == 180) {
  console.log(true);
}
