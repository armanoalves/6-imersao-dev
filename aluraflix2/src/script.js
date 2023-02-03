function adicionarFilme() {
  var filmefavorito = document.getElementById('filme').value;
  var elementoListaFilmes = document.getElementById('listaFilmes');
  
  elementoListaFilmes.innerHTML += '<img src=' + filmefavorito + '>';
  
  document.getElementById('filme').value = '';
}