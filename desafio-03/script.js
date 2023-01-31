var temperaturaC = parseFloat(prompt("Digite uma temperatura em Celsius: "));

var resultado = 0;

var escolha = parseInt(prompt("Quer converter a temperatura para (1)Fahrenheit ou (2)Kelvin?"));

if (escolha == 1) {
    resultado = temperaturaC * (9 / 5) + 32;
    alert("A temperatura " + temperaturaC + " convertida para Fahrenheit é " + resultado);
} else if (escolha == 2) {
    resultado = temperaturaC + 273;
    alert("A temperatura " + temperaturaC + " convertida para Kelvin é " + resultado);
} else {
    alert("Digite um número válido!!")
}

