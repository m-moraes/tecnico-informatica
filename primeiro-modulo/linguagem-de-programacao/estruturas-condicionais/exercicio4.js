/* Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba "sem multa". Se a velocidade for de até 20% maior que a permitida, exiba "multa leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "multa grave". */

<script>

velocidade condutor <= velocidade permitida: "sem multa"
velocidade condutor = %20 a permitida: "multa leve"
velocidade condutor > %20 a permitida: "multa grave" */

var velocidadePermitida = Number(prompt("Digite a velocidade permitida: "))
var velocidadeCondutor = Number(prompt("Digite a velocidade do condutor: "));
var calculoMultaLeve = 1.20 * velocidadePermitida

if(velocidadeCondutor <= velocidadePermitida) {
    alert("Sem multa")
} else if (velocidadeCondutor == calculoMultaLeve) {
    alert("Multa leve")
} else {
	alert("Multa grave")
}

</script>