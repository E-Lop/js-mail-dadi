/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

let userEmail;
/* bottone di input */
const userInfoBtn = document.getElementById('user_input_btn');

/* al click salvo la email dell'utente nella costante userEmail */
userInfoBtn.addEventListener('click', function () {
  userEmail = document.getElementById('user_email').value;
  console.log(userEmail);
});
