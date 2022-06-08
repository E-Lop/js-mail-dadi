/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// generatore numero casuale da 1 a 6
// Math.floor((Math.random() * 5) + 1);

/* ho pensato che l'inserimento di un bottone per il lancio dei dadi
 migliorasse la UX del sito */

// bottone per lanciare i dadi
const playerBtn = document.getElementById('player_btn');

// variabili per i target dei numeri casuali in HTML
const playerResult = document.getElementById('player_roll');
const houseResult = document.getElementById('house_roll');
// variabile per output messaggio esito partita
let resultMessage = document.getElementById('result_message');

// alla pressione del bottone si genera il numero casuale per il giocatore e il banco
playerBtn.addEventListener('click', function () {
  // numero casuale per il giocatore
  let playerRoll = Math.floor(Math.random() * 5 + 1);
  //   numero casuale per il banco
  let houseRoll = Math.floor(Math.random() * 5 + 1);

  //   stampa dei risultati in pagina
  playerResult.innerHTML = `Il risultato del tuo lancio è ${playerRoll}`;
  houseResult.innerHTML = `Il risultato del lancio del banco è ${houseRoll}`;

  /* messaggio di OUTPUT */
  if (playerRoll > houseRoll) {
    resultMessage.innerHTML = `Hai vinto!!!`;
  } else if (playerRoll < houseRoll) {
    resultMessage.innerHTML = `Hai perso!!!`;
  } else {
    resultMessage.innerHTML = `Pareggio!`;
  }
});
