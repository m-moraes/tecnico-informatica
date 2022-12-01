/* Elaborar um programa para uma pizzaria, o qual leia o
valor total de uma conta e quantos clientes vão pagá-la.
Calcule e informe o valor a ser pago por cliente. */

var preco = Number(prompt("Qual o preço total da conta? "));
var pessoas = Number(prompt("Quantas pessoas irão pagar? "));
var totalPorPessoa = preco / pessoas

alert("Cada pessoa deverá pagar o valor de: " + totalPorPessoa);