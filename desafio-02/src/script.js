
var listaFilmes = ['https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg', 'https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg', 'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg', 'https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg', 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'];

var listaMangas = ['https://m.media-amazon.com/images/I/A1KdivdH+sL.jpg', 'https://m.media-amazon.com/images/I/51Qyj-tfh8L.jpg', 'https://upload.wikimedia.org/wikipedia/pt/f/fd/Vinland_Saga_volume_01_capa.jpg', 'https://m.media-amazon.com/images/I/71WQfCd27VL.jpg', 'https://m.media-amazon.com/images/I/81AVPbPbdtL._AC_SL1500_.jpg'];
 
var contador = 0;

while(contador < listaFilmes.length) {
	document.write('<img src=' + listaFilmes[contador] + '>');
	contador++;
}

document.write('<h1 class="page-title"> Alura Mangás </h1>');

listaMangas.forEach((index) => { 
	document.write('<img src=' + index + '>') ;
})
  


