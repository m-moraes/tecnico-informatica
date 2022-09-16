/* Elaborar um programa que leia o valor de um jantar.
Calcule e informe o valor da taxa do garçom (10%) e o
valor a ser pago.
Obs: Para calcular os 10% do valor do jantar, multiplique-o por 0.10 */

var custoJantar = Number(prompt("Digite o valor total da conta: "));
var taxaServico = 0.10;

var custoGarcom = custoJantar * taxaServico;
var custoTotal = custoJantar + custoGarcom;

alert("O valor da taxa do garçom é de " + custoGarcom);
alert("O valor total da conta é de " + custoTotal);