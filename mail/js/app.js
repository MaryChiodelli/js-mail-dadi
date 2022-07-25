const mailList = ['luca@gmail.com', 'marco@gmail.com', 'paolo@gmail.com'];
// chiedere all'utente la sua mail
const userMail = prompt('Inserisci la tua e-mail.');
let isInList;

// controllare se la mail è nella lista
for (let i = 0; i < mailList.length; i++) {
    const currentMail = mailList[i];

    if (currentMail === userMail) {
        isInList = true;
    }
}

// SE la mail è nella lista
if (isInList) {
    // stampare il messaggio Accesso Consentito
    console.log('Accesso Consentito');
} else {
// ALTRIMENTI
    // stampare il messaggio Accesso Negato
    console.log('Accesso Negato');
}