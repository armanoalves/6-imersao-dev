var numeroSecreto = parseInt(Math.random() * 1001);

while (chute != numeroSecreto) {
  var chute = parseInt(prompt('Digite um número entre 0 e 1000'));
  
  //Se o chuto for igual a o número secreto...
  if (chute == numeroSecreto) {
    alert('Você acertou!')
  } else if (chute > numeroSecreto) {
    alert('Você errou! o número secreto é menor')
  } else if (chute < numeroSecreto) {
    alert('Você errou! o número secreto é maior')
  }
}

