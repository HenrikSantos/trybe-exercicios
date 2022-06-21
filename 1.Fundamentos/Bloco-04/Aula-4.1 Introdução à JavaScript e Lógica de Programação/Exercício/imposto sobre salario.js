// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.

let salario = 3000;

function imposto(salario) {
  let _salario = salario;

  if (_salario <= 1903.98) {
    return _salario;
  } else if (_salario <= 2826.65) {
    _salario = salario - (_salario * 0.075 - 142.8);
    return _salario;
  } else if (_salario <= 3751.05) {
    _salario = salario - (_salario * 0.15 - 354.8);
    return _salario;
  } else if (_salario <= 4664.68) {
    _salario = salario - (_salario * 0.225 - 636.13);
    return _salario;
  } else if (_salario > 4664.68) {
    _salario = salario - (_salario - 570.275 - 869.36);
    return _salario;
  }
}

function inss(salario) {
  _salario = salario;
  if (_salario <= 1556.94) {
    _salario = _salario * (1 - 0.08);
    _salario = imposto(_salario);
  } else if (_salario <= 2594.92) {
    _salario = _salario * (1 - 0.09);
    _salario = imposto(_salario);
  } else if (_salario <= 5189.82) {
    _salario = _salario * (1 - 0.11);
    _salario = imposto(_salario);
  } else if (_salario > 5189.82) {
    _salario = _salario - 570.88;
    _salario = imposto(_salario);
  }
  return _salario;
}

console.log(`salarioFinal liquído é:`, inss(salario));
