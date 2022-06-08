/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// generatore numero casuale da 1 a 6
// Math.floor((Math.random() * 5) + 1);

/* Se usassi lo stesso generatore di numeri casuale per giocatore e banco
al caricamento della pagina otterrei sempre un pareggio perchè si tratta
a tutti gli effetti di un singolo numero casuale attribuito a poi a due campi.
Per ovviare, il dado del banco è lanciato al caricamento della pagina mentre
il dado del giocatore è lanciato alla pressione del bottone, così ottengo
due generazioni diverse che non risultano sempre uguali */

// bottone per lanciare il dado
const playerBtn = document.getElementById('player_btn');

// variabile per il numero casuale del giocatore
let player_roll;

// numero casuale da 1 a 6 generato al caricamento della pagina per il banco
let houseRoll = Math.floor(Math.random() * 5 + 1);
console.log('banco', houseRoll);

// variabili per i target dei numeri casuali in HTML
const playerResult = document.getElementById('player_roll');
const houseResult = document.getElementById('house_roll');

// alla pressione del bottone si genera il numero casuale per il giocatore
playerBtn.addEventListener('click', function () {
  let playerRoll = Math.floor(Math.random() * 5 + 1);
  console.log('giocatore', playerRoll);
  playerResult.innerHTML = `Il risultato del tuo lancio è ${playerRoll}`;
  houseResult.innerHTML = `Il risultato del lancio del banco è ${houseRoll}`;
});
