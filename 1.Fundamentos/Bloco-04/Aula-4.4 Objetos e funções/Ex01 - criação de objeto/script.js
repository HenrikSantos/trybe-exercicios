// 1 - Crie um objeto player contendo as variáveis listadas abaixo.
let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
};

// 2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
const fullname = player.name + " " + player.lastName;
console.log(`A jogadora ${fullname} tem ${player.age} anos de idade`);

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(player);
// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
console.log(
  `A jogadora ${fullname} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`
);

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log(
  `A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`
);
