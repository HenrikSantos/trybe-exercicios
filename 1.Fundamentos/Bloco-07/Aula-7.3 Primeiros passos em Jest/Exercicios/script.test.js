const { sum, myRemove, myFizzBuzz, searchEmployee } = require("./script");

describe("01 - Verificar a função SUM", () => {
  test("verifica se ao passar os valores 4 e 5 é retornado 9", () => {
    expect(sum(4, 5)).toBe(9);
  });
  test("verifica se ao passar os valores 0 e 0 é retornado 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('verifica se ao passar os valores 4 e "5" é retornado um erro', () => {
    expect(() => {
      sum(4, "5");
    }).toThrowError();
  });
  test('verifica se ao passar os valores 4 e "5" a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => {
      sum(4, "5");
    }).toThrowError("parameters must be numbers");
  });
});

describe("02 - Verificar a função myRemove", () => {
  test("verifica se ao passar o valor ([1, 2, 3, 4], 3) retorna o esperado", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test("verifica se ao passar o valor ([1, 2, 3, 4], 3) não retorna o esperado [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test("verifica se ao passar o valor ([1, 2, 3, 4], 5) retorna o esperado", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe("03 - Verificar a função myFizzBuzz", () => {
  test('verifica se ao passar o valor 15 o retorno é "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });
  test('verifica se ao passar o valor 6 o retorno é "fizz"', () => {
    expect(myFizzBuzz(6)).toBe("fizz");
  });
  test('verifica se ao passar o valor 10 o retorno é "buzz"', () => {
    expect(myFizzBuzz(10)).toBe("buzz");
  });
  test("verifica se ao passar o valor 7 o retorno é 7", () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  test("verifica se ao passar um valor não numérico o retorno é false", () => {
    expect(myFizzBuzz("NaN")).toBe(false);
  });
});

describe("04 - Verificar a função searchEmployee", () => {
  test("verifica se searchEmployee é uma função", () => {
    expect(typeof searchEmployee).toBe("function");
  });
  test('verifica se ao passar um id não válido é retornado um erro com a mensagem "Funcionário não encontrado no board"', () => {
    expect(() => {
      searchEmployee("9999");
    }).toThrowError("Funcionário não encontrado no board");
  });
  test('verifica se ao passar um id válido é retornado "correto"', () => {
    expect(searchEmployee("4678-2")).toBe(`id: 4678-2
nome: Paul Dodds
especialidades: Backend`);
  });
});
