/*
Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area e stampare il risultato con console.log
*/

var triangolo = {
   base: 10,
   altezza:14
}

//calcolo ipotenusa-----------
var ipotenusa = Math.sqrt(Math.pow(triangolo.base,2) + Math.pow(triangolo.altezza,2));
//calcolo del perimetro + area
var perimetro = ipotenusa + triangolo.base + triangolo.altezza;


console.log("perimetro");
