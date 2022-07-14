const printName = function () {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());

const printName = () => {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());

const printName = () => 'Lucas';

console.log(printName());
