// Desafio 03 - Lista de informações para criação do banner do filme na página.

var listaFilmes = ['https://capas-p.imagemfilmes.com.br/164908_000_p.jpg', 'https://i.pinimg.com/222x/f5/f7/d0/f5f7d027093a8879efb23b986dfa5a3e.jpg', 'https://www.passadefase.com/wp-content/uploads/2019/07/capa-filme-homem-aranha-longe-de-casa-6aa9c-large.jpg', 'https://i.pinimg.com/236x/04/97/22/049722bb38259715bc85a25e9d7a2377.jpg'];
var nomeFilmes = ['Infiltrado', 'Sherlock Holmes', 'Homem Aranha Longe de Casa', 'Matrix Ressureição'];
var trailerFilmes = ['https://www.youtube.com/watch?v=U6lq_G4VR60', 'https://www.youtube.com/watch?v=JLLlvgrauag', 'https://www.youtube.com/watch?v=vaw_8DoqXfk', 'https://www.youtube.com/watch?v=0uMGAOAaiYQ'];

var divisona = document.querySelector('#listaFilmes');

function mostraImagens() {
	divisona.innerHTML = ''
	
	for (var i = 0; i < listaFilmes.length; i++) {
		
		var link = document.createElement('a')
		var div = document.createElement('div');
		var image = document.createElement('img');
		var nome = document.createElement('p');
		
		image.src = listaFilmes[i];
		nome.innerText = nomeFilmes[i];
		link.href = trailerFilmes[i];
		link.target = '_blank';
		div.appendChild(image);
		div.appendChild(nome);
		link.appendChild(div);
		divisona.appendChild(link);
	
	}
}

function adicionarFilme() {
	var linkFilme = document.querySelector('#filme').value;
	var nomeFilme = document.querySelector('#nome').value;
	var trailerFilme = document.querySelector('#trailer').value;
	listaFilmes.push(linkFilme);
	nomeFilmes.push(nomeFilme);
	trailerFilmes.push(trailerFilme);
	
	document.querySelector('#filme').value = '';
	document.querySelector('#nome').value = '';
	document.querySelector('#trailer').value = '';
	
	mostraImagens();
}

function deletar() {
	listaFilmes.pop()
	mostraImagens();
}

mostraImagens();