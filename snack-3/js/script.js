/*
Creare un array con tre numeri, calcolare la media di questi tre numeri.
*/

var numbers = [5, 3 , 7];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
   sum += numbers[i];
}

var avg = sum/numbers.length;

console.log(avg)

/* 
Costruiamo un array di tre giocatori di basket. Ogni giocatore avrà le seguenti proprietà:
nome
cognome
anno
punteggio
Calcolare il punteggio medio dei tre giocatori.
*/

var players = [
   {
      name: "pippo",
      surname: "baudo",
      age: 18,
      score: 35
   },
   {
      name: "dayron",
      surname: "aguilera",
      age: 36,
      score: 85
   
   },
   {
      name: "gabriele",
      surname: "sanna",
      age: 22,
      score: 65
   
   },
]

var sum2 = 0;

for (var i = 0; i < players.length; i++) {

   sum2 += players[i].score;
  
}

var mediaScore = sum2 / players.length;

console.log(mediaScore);