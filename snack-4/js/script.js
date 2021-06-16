/*
Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
nome
cognome
age
descrizione

Per nome, cognome ed age assegnate direttamente nel codice i valori che volete. 
ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.

{
  nome: 'Pippo',
  cognome: 'Baudo',
  age: 80,
  descrizione: ''
} 

Successivamente, con dei prompt chiediamo di volta in volta all’utente la descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà. 

Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;) 

Stampiamo con un console.log il risultato di questo array di studenti aggiornato.

Bonus
Visualizzare nell’html questi dati in una forma tabellare.

*/
var listStudents = document.getElementById("list_students");

var schoolOfRock = [
   {
      name: "Jack",
      surname: "Black",
      age:45,
      descrizione: "",
   },
   {
      name: "Miranda",
      surname: "Cosgrove",
      age:15,
      descrizione: "",

   },
   {
      name: "Robert",
      surname: "Tsai",
      age:14,
      descrizione: "",

   },
]
console.log(schoolOfRock);
var ulStudents = " ";


for (var i = 0; i < schoolOfRock.length; i++) {

   var description =  prompt("Descrivi lo studente!")// chidiamo all'utente di descrivere un suo compagno!
   descriptions = description[0].toUpperCase() + description.slice(1); // qui facciamo si che diventi maiuscolo l'inizale di quello che inserisce l'utente!

   schoolOfRock[i].descrizione = descriptions;

   ulStudents += "<tr>";
   ulStudents += "<td>";
   ulStudents += schoolOfRock[i]["name"] + " ";
   ulStudents += "</td>";

   ulStudents += "<td>";
   ulStudents += schoolOfRock[i]["surname"] + " ";
   ulStudents += "</td>";

   ulStudents += "<td>";
   ulStudents += schoolOfRock[i]["age"] + " ";
   ulStudents += "</td>";

   ulStudents += "<td>";
   ulStudents += schoolOfRock[i]["descrizione"] + " ";
   ulStudents += "</td>";
   ulStudents += "</tr>";
}
listStudents.innerHTML = ulStudents;


// for (var i = 0; i < schoolOfRock.length; i++) {

//    for (var key in schoolOfRock[i]) {
//       listStudents.innerHTML += schoolOfRock[i][key] + " ";
//    }
   
// }


