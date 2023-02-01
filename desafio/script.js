var numeroSecreto = parseInt(Math.random() * (1000 - 1) + 1);
var contador = 0;
var tentativas = 5;

 while (contador != 5) {

  var chute = parseInt(prompt('Digite um número entre 1 e 1000'));
  
  //Se o chuto for igual a o número secreto...
  if (chute == numeroSecreto) {
    alert('Você acertou!');
		
  } else if (chute > numeroSecreto) {
		contador += 1;
		tentativas -= 1;
    alert('Você errou! o número secreto é menor, você tem ' + tentativas + ' tentativas.');
		
		
  } else if (chute < numeroSecreto) {
		contador += 1;
		tentativas -= 1;
    alert('Você errou! o número secreto é maior, você tem ' + tentativas + ' tentativas.')
		
  }
}

alert('O número secreto era ' + numeroSecreto);

