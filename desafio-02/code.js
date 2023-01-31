var distanciaKm = 1425000000;
var AnosluzEquivalente = 0.0000000000001057;

var distanciaEmAnosluz = distanciaKm * AnosluzEquivalente;
var tempo = distanciaEmAnosluz * 31536000;
alert("De Saturno até o sol, a distância é de " + distanciaEmAnosluz + " Anos-luz e o tempo que leva para percorrer é de " + tempo + " segundos");