const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com 
// informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. 
// Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo 
// juntos. Para isso, utilize o spread operator.


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const totalData = {...user, ...jobInfos}
console.log(totalData);

// 2 - Com o objeto em mãos, imprima no console uma frase de sua escolha utilizando os dados 
// do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto 
// com template literals.

const {name: nome, age, nationality, profession, squad, squadInitials} = totalData;

console.log(`Hi, my name is ${nome}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

// ""