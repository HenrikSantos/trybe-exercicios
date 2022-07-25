const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

function formatedBookNames(arr) {
  // escreva seu código aqui
  return arr.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);
}
console.log(formatedBookNames(books));

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma 
// propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa 
// pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais 
// jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map, sort

function nameAndAge(arr) {
  // escreva seu código aqui
  return arr.map((element) => ({age: (element.releaseYear - element.author.birthYear), author: element.author.name})).sort((a, b)=> a.age - b.age)
}
console.log(nameAndAge(books));

// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter;
function fantasyOrScienceFiction(arr) {
  // escreva seu código aqui
  return arr.filter((element)=> element.genre === 'Fantasia' || element.genre === 'Ficção Científica')
}
console.log(fantasyOrScienceFiction(books));

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort
function oldBooksOrdered(arr) {
  // escreva seu código aqui
  const d = new Date();
  return arr.filter((element) => (d.getFullYear() - element.releaseYear) > 60).sort((a, b) => a.releaseYear - b.releaseYear);
}
console.log(oldBooksOrdered(books));

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
function fantasyOrScienceFictionAuthors(arr) {
  // escreva seu código aqui
  return arr.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia').map((element)=> element.author.name).sort();
}
console.log(fantasyOrScienceFictionAuthors(books));

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
function oldBooks(arr) {
  // escreva seu código aqui
  const d = new Date();
  return arr.filter((element) => (d.getFullYear() - element.releaseYear) > 60).map((element) => element.name);
}
console.log(oldBooks(books));

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

// --- gabarito melhorado --- 
// function authorWith3DotsOnName(arr) {
//   return arr.find((element) => (
//     element.author.name.split(' ')
//       .filter((word) => word.endsWith('.')).length === 3
//   )).name;
// }

// eu
function authorWith3DotsOnName(arr) {
  const authors = arr.filter((element) => {
    let word = '';
    for(index = 0; index < 8; index += 1){
      word += element.author.name[index];
    }
    const countPoints = word.split('').filter((element)=> element === '.')
    return countPoints.length === 3;
  });
  return authors.map((element) => element.name);
}
console.log(authorWith3DotsOnName(books));