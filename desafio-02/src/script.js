var paulo = {
  nome: 'Paulo',
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
}

var rafa = {
  nome: 'Rafa',
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
}

var gui = {
  nome: 'Gui',
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
}

var renato = {
  nome: 'Renato',
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
}

listaJogadores = [paulo, rafa, gui, renato];

var elementoTabela = document.getElementById('tabelaJogadores');

function exibirNaTela() {
	elementoTabela.innerHTML = '';
	listaJogadores.forEach((player) => {
		  elementoTabela.innerHTML += `
   <tr>
        <td>${player.nome}</td>
        <td>${player.vitoria}</td>
        <td>${player.empate}</td>
        <td>${player.derrota}</td>
        <td>${player.pontos}</td>
        <td><button onClick="adicionarVitoria(${listaJogadores.indexOf(player)})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
		`
	})
}

exibirNaTela();

function adicionarVitoria(index) {
	listaJogadores.forEach((player) => {
				if(player == listaJogadores[index]) {
					listaJogadores[index].vitoria++;
  				listaJogadores[index].pontos+= 3;
				} else {
					player.derrota++;
				}
	})
  exibirNaTela();
}

function adicionarEmpate() {
	listaJogadores.forEach((player) => {
		    player.empate++;
  			player.pontos++;
	})
  exibirNaTela();
}
