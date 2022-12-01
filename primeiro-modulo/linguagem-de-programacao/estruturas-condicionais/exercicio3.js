/* Ainda realizando o cálculo da média entre as três notas, elabore um script que verifique a situação acadêmica do mesmo. Se a sua nota for maior ou igual a 7, o aluno está APROVADO, se a sua nota for maior ou igual a 6, o aluno estará em RECUPERAÇÃO, caso contrário, o aluno está REPROVADO. */

<script>

var nome = prompt("Qual o seu nome?");
var nota1 = Number(prompt("Digite sua primeira nota"));
var nota2 = Number(prompt("Digite sua segunda nota"));
var nota3 = Number(prompt("Digite sua terceira nota"))

var media = (nota1 + nota2 + nota3) / 3;

if(media >= 7) {
    alert(nome + ", sua média é: " + media + ", você foi aprovado!")
} else if (media >= 6) {
    alert(nome + ", sua média é: " + media + ", você está em recuperação!")
} else {
	alert(nome + ", sua média é: " + media + ", você está reprovado!")
}

</script>