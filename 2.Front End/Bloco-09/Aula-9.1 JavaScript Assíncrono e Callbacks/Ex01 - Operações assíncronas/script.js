// Sem assinconia
// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);

// com assincronia
const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => {
  pushNumber(numbers, 1) 
  console.log(numbers)}, 3000
);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [2, 3]