listaBoss = [
	{
  nome: 'Margit, o presságio caído',
	imagem: 'https://i.imgur.com/ZAJ54mM.jpg',
  vida: 4174,
  qtdRunas: 12000,
  mortes: 0,
	},
	{
  nome: 'Godrick, o Enxertado',
	imagem: 'https://i.imgur.com/bZL8uNp.jpg',
  vida: 6080,
  qtdRunas: 20000,
  mortes: 0,
	},
	{
  nome: 'Lobo Vermelho de Radagon',
	imagem: 'https://i.imgur.com/2I00wgT.jpg',
  vida: 2204,
  qtdRunas: 14000,
  mortes: 0,
	},
	{
  nome: 'Renalla, Rainha da Lua Cheia',
	imagem: 'https://i.imgur.com/fivg3GD.jpg',
  vida: 4097,
  qtdRunas: 40000,
  mortes: 0,
	},
	{
  nome: 'Godfrey, Primeiro Lorde Elden',
	imagem: 'https://i.imgur.com/5ZxYycO.jpg',
  vida: 7099,
  qtdRunas: 80000,
  mortes: 0,
	},
	{
  nome: 'Morgott, o rei presságio',
	imagem: 'https://i.imgur.com/qTTtHFY.jpg',
  vida: 10399,
  qtdRunas: 90000,
  mortes: 0,
	},
	{
  nome: 'Gigante de Fogo',
	imagem: 'https://i.imgur.com/zzArW5Z.jpg',
  vida: 43263,
  qtdRunas: 180000,
  mortes: 0,
	},
	{
  nome: 'Maliketh, A Lâmina Negra',
	imagem: 'https://i.imgur.com/XKxobC5.jpg',
  vida: 10620,
  qtdRunas: 55000,
  mortes: 0,
	},
	{
  nome: 'Radagon da Ordem Dourada',
	imagem: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/radagon_of_the_golden_order_bosses_elden_ring_wiki_600px.jpg',
  vida: 22127,
  qtdRunas: 500000,
  mortes: 0,
  pontos: 0
	},
	{
  nome: 'Milenia, A Espada de Miquella',
	imagem: 'https://i.imgur.com/KYUCAig.jpg',
  vida: 33251,
  qtdRunas: 480000,
  mortes: 0,
	},
]

var elementoTabela = document.getElementById('tabelaJogadores');

function exibirNaTela() {
	elementoTabela.innerHTML = '';
	listaBoss.forEach((player) => {
		  elementoTabela.innerHTML += `
   <tr>
	 			<td><img style="max-width: 150px;" src="${player.imagem}"></td>
        <td>${player.nome}</td>
        <td>${player.vida}</td>
				<td>${player.qtdRunas}</td>
        <td>${player.mortes}</td>
        <td><button onClick="adicionarMortes(${listaBoss.indexOf(player)})">Mortes</button></td>
        <br> 
		`
	})
}

exibirNaTela();

function adicionarMortes(index) {
	listaBoss.forEach((player) => {
				if(player == listaBoss[index]) {
					listaBoss[index].mortes++;
				} 
	})
  exibirNaTela();
}

function adicionarBoss() {
  var nomeBoss = prompt("Insira o nome do novo Boss")
  var imagemBoss = prompt("Insira um endereço de imagem")
	var vidaBoss = prompt("Insira a vida do Boss")
  var runasBoss = prompt("Insira a quantidade de runas dropadas pelo Boss")
	var mortesBoss = prompt("Insira a sua quantidade de mortes para o Boss")
		
  var novoJogador = {
    nome: nomeBoss,
    imagem: imagemBoss,
  	vida: vidaBoss,
  	qtdRunas: runasBoss,
  	mortes: mortesBoss,
  }
	
  listaBoss.push(novoJogador);
  exibirNaTela();
}