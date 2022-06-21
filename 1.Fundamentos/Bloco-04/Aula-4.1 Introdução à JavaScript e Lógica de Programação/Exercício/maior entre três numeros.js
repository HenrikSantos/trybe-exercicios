// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 7;
const b = 7;
const c = 5;

if (a > b && a > c) {
  console.log(a, "é o maior número");
} else if (b > a && b > c) {
  console.log(b, "é o maior número");
} else if (c > a && c > b) {
  console.log(c, "é o maior número");
} else if (a == b || a == c || b == c) {
  console.log("números iguais, não existe o maior numero :)");
} else {
  console.log("[ERRO]");
}

// //Resolução não aceita pela socioedade:
//   const numeros = [a, b, c];

//   numeros.sort()
//   console.log(numeros[numeros.length-1])
