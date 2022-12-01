/* Construir um script que leia o sexo e o salário bruto de um funcionário. Se o sexo for "M", calcular, armazenar e imprimir um desconto de 5% e o salário líquido, se o sexo for "F", calcular, armazenar e imprimir um desconto de 3% e o salário líquido. */

<script>

var sexo = prompt("Qual o seu sexo? Digite M para masculino e F para feminino: "));
var salarioBruto = Number(prompt("Digite o seu salário bruto: "));

if(sexo == "M") {
    var salarioLiquidoH = salarioBruto * 0.05
    alert(salarioLiquidoH)
} else {
	var salarioLiquidoF = salarioBruto * 0.03
	alert(salarioLiquidoF)
}

</script>