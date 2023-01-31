var nomeUsuario = document.querySelector(".nomeUsuario");
var cotacaoDoDolar = 5.32;
var cotacaoDoEuro = 5.54;
var cotacaoDoIene = 0.039;

var valorEmDolar = parseFloat(prompt("Digite um valor em dolares para converter em real: "))
var valorEmEuro = parseFloat(prompt("Digite um valor em euros para converter em real: "))
var valorEmIene = parseFloat(prompt("Digite um valor em ienes para converter em real: "))

var valorEmReal1 = valorEmDolar * cotacaoDoDolar;
var valorEmReal2 = valorEmEuro * cotacaoDoEuro;
var valorEmReal3 = valorEmIene * cotacaoDoIene;

valorEmReal1 = valorEmReal1.toFixed(2);
valorEmReal2 = valorEmReal2.toFixed(2);
valorEmReal3 = valorEmReal3.toFixed(2);

alert('$ ' + valorEmDolar +' dolares equilave a R$ ' + valorEmReal1 + ' reais, € ' +  valorEmEuro + ' euros equivale a R$ ' + valorEmReal2 + ' reais, ¥ ' + valorEmIene + ' ienes equivale a R$ ' + valorEmReal3 + ' reais.');