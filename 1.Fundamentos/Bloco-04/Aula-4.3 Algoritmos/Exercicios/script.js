// 1.  O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
let fatorial = 1;
for (let index = 1; index <= 10; index += 1) {
  fatorial = fatorial * index;
}
console.log("fatorial é:", fatorial);

// 2. desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = "banana";
let wordInverso = "";
for (let index = word.length - 1; index > -1; index -= 1) {
  wordInverso += word[index];
  // console.log(word[index])
}
// console.log(word.length)
console.log(wordInverso);

// 3. Considere o array de strings abaixo:

let array = ["java", "javascript", "python", "html", "css"];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
maiorPalavra = "";
menorPalavra = array[0];
for (index of array) {
  if (index.length > maiorPalavra.length) {
    maiorPalavra = index;
  }
  if (index.length < menorPalavra.length) {
    menorPalavra = index;
  }
}
console.log(maiorPalavra);
console.log(menorPalavra);
// 4. Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let numeroDeVezesQueFoiDivido = 0;
let maiorNumeroPrimo = 0;
let atualPrimo = 0;
for (let index = 2; index <= 500; index += 1) {
  for (let index2 = 2; index2 <= 500; index2 += 1) {
    if (index % index2 == 0) {
      numeroDeVezesQueFoiDivido += 1;
    }
    if (numeroDeVezesQueFoiDivido != 1) {
      continue;
    }
  }
  if (numeroDeVezesQueFoiDivido == 1) {
    maiorNumeroPrimo = index;
  }
  numeroDeVezesQueFoiDivido = 0;
}
console.log(maiorNumeroPrimo);
