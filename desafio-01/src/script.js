
var listaMangas = ['https://m.media-amazon.com/images/I/A1KdivdH+sL.jpg', 'https://m.media-amazon.com/images/I/51Qyj-tfh8L.jpg', 'https://upload.wikimedia.org/wikipedia/pt/f/fd/Vinland_Saga_volume_01_capa.jpg', 'https://m.media-amazon.com/images/I/71WQfCd27VL.jpg', 'https://m.media-amazon.com/images/I/81AVPbPbdtL._AC_SL1500_.jpg']
 
for (var i = 0; i < listaMangas.length; i++) {
  document.write('<img src=' + listaMangas[i] + '>')
}