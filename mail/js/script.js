/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

// dichiarazione variabile email utente
let userEmail;

// variabile flag per indicare se l'utente è autorizzato
let userAuthorized = false;

// array contenente elenco email autorizzate
const authorizedEmails = [
  'uno@mail.com',
  'due@mail.com',
  'tre@mail.com',
  'quattro@mail.com',
  'cinque@mail.com',
  'sei@mail.com',
];

// bottone di input
const userInfoBtn = document.getElementById('user_input_btn');

// al click salvo la email dell'utente nella costante userEmail
userInfoBtn.addEventListener('click', function () {
  userEmail = document.getElementById('user_email').value;

  //   ciclo for per scorrere gli elementi della lista
  for (let i = 0; i < authorizedEmails.length; i++) {
    // se input dell'utente uguale a elemento array userAuthorized diventa true
    if (userEmail === authorizedEmails[i]) {
      userAuthorized = true;
    }
  }

  /****** SEZIONE OUTPUT *******/
  if (userAuthorized === true) {
    alert('Accesso consentito');
  } else {
    alert('Accesso negato');
  }
});
