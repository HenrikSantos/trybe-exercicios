let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1.Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (index of numbers) {
  console.log(index);
}

// 2.Some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (index of numbers) {
  soma = soma + index;
}
console.log("soma é", soma);

// 3.Calcule e imprima a média aritmética dos valores contidos no array;
let media = soma / numbers.length;
console.log("Média Aritimérica é:", media);

// 4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

// 5.Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = 0;
for (index of numbers) {
  if (maiorNumero < index) {
    maiorNumero = index;
  }
}
console.log(maiorNumero);

// 6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numerosImpares = 0;
for (index of numbers) {
  if (index % 2 != 0) {
    numerosImpares += 1;
  }
}
if (numerosImpares == 0) {
  console.log("nenhum valor ímpar encontrado");
}

// 7.Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menorNumero = 0;
for (index of numbers) {
  if (menorNumero > index) {
    menorNumero = index;
  }
}
console.log(menorNumero);

// 8.Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let arrayDo1Ao25 = [];
for (let index = 1; index <= 25; index += 1) {
  arrayDo1Ao25.push(index);
}

// 9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
console.log(arrayDo1Ao25);
for (index of arrayDo1Ao25) {
  console.log(index / 2);
}
