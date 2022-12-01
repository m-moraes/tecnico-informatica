/* Crie um rograma em JavaScript que leia o nome e a média de um aluno, apresente a mensagem para o aluno: "Parabéns, você foi arovado(a)!" ou então "Ops, você foi reprovado!". A situação de aprovado ou reprovado é definido pela média das notas, que deve ser 7.0 ou superior */

<script>

var nome = prompt("Qual o seu nome?");
var media = Number(prompt("Digite sua média: "));

if(media >= 7) {
    alert(nome + ", você foi aprovado!")
} else {
    alert(nome + ", você foi reprovado!")
}

</script>