addValueToObjetct = (object, key, value) => {
  object[key] = value;
  return object;
}
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

addValueToObjetct(customer, 'lastName', 'Souza')

console.log(customer)

// customer.