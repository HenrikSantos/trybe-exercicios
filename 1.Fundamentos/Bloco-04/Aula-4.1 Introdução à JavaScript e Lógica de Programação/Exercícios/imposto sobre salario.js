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

//sem função
let salario = 1800;

if (salario <= 1556.94) {
  salario = salario * (1 - 0.08);
} else if (salario <= 2594.92) {
  salario = salario * (1 - 0.09);
} else if (salario <= 5189.82) {
  salario = salario * (1 - 0.11);
} else if (salario > 5189.82) {
  salario = salario - 570.88;
}

if (salario <= 1903.98) {
} else if (salario > 1903.98 && salario <= 2826.65) {
  salario = salario - (salario * 0.075 - 142.8);
} else if (salario <= 3751.05) {
  salario = salario - (salario * 0.15 - 354.8);
} else if (salario <= 4664.68) {
  salario = salario - (salario * 0.225 - 636.13);
} else if (salario > 4664.68) {
  salario = salario - (salario - 570.275 - 869.36);
}
console.log(`salario final liquído é: ${salario}`);

//com função
{
  function inss(_salario) {
    let salario = _salario;
    let taxaInss = [0.92, 0.91, 0.89, 570.88];
    let valorDaTaxa = [1556.94, 2594.92, 5189.82];

    if (salario > valorDaTaxa[valorDaTaxa.length - 1]) {
      salario = salario - taxaInss[taxaInss.length - 1];
      return salario;
    }

    for (let index = 0; index < taxaInss.length; index++) {
      if (salario <= valorDaTaxa[index]) {
        return salario * taxaInss[index];
      }
    }
  }

  function impostoDeRenda(_salario) {
    let salario = _salario;
    let taxaImpostoDeRenda = [0.075, 0.15, 0.225];
    let parcela = [142.8, 354.8, 636.13, 869.36];
    let tetoDaTaxaImposto = [2826.65, 3751.05, 4664.68];

    if (salario <= 1903.98) {
      return salario;
    }
    if (salario > 4664.68) {
      return salario - (salario * 0.275 - 869.36);
    }
    for (let index = 0; index < 3; index++) {
      if (salario <= tetoDaTaxaImposto[index]) {
        return salario - (salario * taxaImpostoDeRenda[index] - parcela[index]);
      }
    }
  }
  function calcularImpostos(_salario) {
    let salario = _salario;
    if (salario < 0) {
      return "Salario não pode ser negativo!";
    }
    salario = inss(salario);
    salario = impostoDeRenda(salario);
    return salario;
  }
  console.log(calcularImpostos(1800));
}
