/* Elaborar um programa que leia a duração de uma viagem em dias
e horas. Calcule e informe a duração total da viagem em números
de horas. Exemplo:
Nº dias: 2
Nº horas: 5
Total de horas 53 */

var duracaoEmDias = Number(prompt("Digite a duração da viagem em dias: "));
var duracaoEmHoras = Number(prompt("Digite a duração da viagem em horas: "));
var umDiaEmHoras = 24;


var duracaoTotal = (duracaoEmDias * umDiaEmHoras) + duracaoEmHoras;

alert("A duração total da viagem foi de " + duracaoTotal);