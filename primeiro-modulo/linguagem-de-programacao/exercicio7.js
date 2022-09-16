/* Elaborar um programa para uma loja, o qual leia o preço de um
produto e informe as opções de pagamento da loja. Calcule e
informe o valor para pagamento à vista com 10% de desconto e o
valor em 3x. Exemplo:
Preço R$: 60.00
À vista R$: 54.00
Ou em 3x de R$: 20,00 */

var precoProduto = Number(prompt("Digite o preço do produto: "));
var precoComDesconto = precoProduto - (precoProduto * 0.10);
var precoParcelado = precoProduto / 3;

alert("O preço do produto com 10% de desconto é de: " + (precoComDesconto).toFixed(2));

alert("O preço do produto parcelado em 3x é de: " + (precoParcelado).toFixed(2));