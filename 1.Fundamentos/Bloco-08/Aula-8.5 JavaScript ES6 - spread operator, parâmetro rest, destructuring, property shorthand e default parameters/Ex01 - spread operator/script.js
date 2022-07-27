// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'abacaxi', 'tomate'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['açaí', 'leite em pó', 'castanha'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));