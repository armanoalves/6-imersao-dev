var nomeUsuario = document.querySelector(".nomeUsuario");
var cotacaoDoDolar = 5.32;
var cotacaoDoEuro = 5.54;
var cotacaoDoIene = 0.039;
var cotacaoDoBitC = 117260.42;

var valorEmDolar = parseFloat(prompt("Digite um valor em dolares para converter em real: "))
var valorEmEuro = parseFloat(prompt("Digite um valor em euros para converter em real: "))
var valorEmIene = parseFloat(prompt("Digite um valor em ienes para converter em real: "))
var valorEmBitC = parseFloat(prompt("Digite um valor em BitCoin para converter em real: "))

var valorEmReal1 = valorEmDolar * cotacaoDoDolar;
var valorEmReal2 = valorEmEuro * cotacaoDoEuro;
var valorEmReal3 = valorEmIene * cotacaoDoIene;
var valorEmReal4 = valorEmBitC * cotacaoDoBitC;

valorEmReal1 = valorEmReal1.toFixed(2);
valorEmReal2 = valorEmReal2.toFixed(2);
valorEmReal3 = valorEmReal3.toFixed(2);
valorEmReal4 = valorEmReal4.toFixed(2);

alert('$ ' + valorEmDolar +' dolares equilave a R$ ' + valorEmReal1 + ' reais, € ' +  valorEmEuro + ' euros equivale a R$ ' + valorEmReal2 + ' reais, ¥ ' + valorEmIene + ' ienes equivale a R$ ' + valorEmReal3 + ' reais, BTC ' + valorEmBitC + 'BitCoins equivale a R$ ' + valorEmReal4 + ' reais.');