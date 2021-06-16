/*
Snack 1.
Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
*/

var palla = {
    name: "wilson",
    peso: 10,
}

/*
Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
*/
palla.peso = prompt("inserisci il peso");

console.log(palla);

/*
Inserire  l’oggetto palla in una array var giochi = [];
*/

/*
Permettere all’utente di inserire un nuovo oggetto all’interno dell’array giochi

*/



var giochi = [];

giochi.push(palla);

var newName = prompt('Inserisci il nome del nuovo gioco');
var newPeso = prompt('Inserisci il peso');
giochi.push({
    nome: newName,
    peso: newPeso
});


console.log(giochi);


