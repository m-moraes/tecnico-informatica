/* Baseando-se na atividade anterior, ao invés de digitar a média, calcule a média entre três notas e exiba novamente o resultado adequado. */

<script>

var nome = prompt("Qual o seu nome?");
var nota1 = Number(prompt("Digite sua primeira nota"));
var nota2 = Number(prompt("Digite sua segunda nota"));
var nota3 = Number(prompt("Digite sua terceira nota"))

var media = (nota1 + nota2 + nota3) / 3;

if(media >= 7) {
    alert(nome + ", sua média é: " + media + ", você foi aprovado!")
} else {
    alert(nome + ", sua média é: " + media + ", você foi reprovado!")
}

</script>