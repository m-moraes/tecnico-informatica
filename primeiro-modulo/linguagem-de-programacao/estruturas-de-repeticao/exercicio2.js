/* elabore um programa que seja solicitado quatro vezes um número inteiro e imprima o triplo deles. */

<script>

for(let i = 1; i < 5; i++) {
	var numeros = Number(prompt("Digite quatro números: "));
    var resultado = numeros*3
    document.write("<br>" + resultado)
}

</script>