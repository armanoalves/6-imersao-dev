var paulo = {
  nome: 'paulo',
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
        <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
        <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
      </tr>
		`
	})
}

exibirNaTela();

function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos += 3;
  exibirNaTela();
}

function adicionarEmpate() {
	listaJogadores.forEach((player) => {
		    player.empate++;
  			player.pontos++;
	})
  exibirNaTela();
}

function adicionarDerrota(jogador) {
  jogador.derrota++;
  exibirNaTela();
}