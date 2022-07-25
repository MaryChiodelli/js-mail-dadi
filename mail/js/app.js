const mailList = ['luca@gmail.com', 'marco@gmail.com', 'paolo@gmail.com'];
// chiedere all'utente la sua mail
const userMail = prompt('Inserisci la tua e-mail.');
const messageElement = document.querySelector('p');
let isInList;
let messageContent;

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
    messageContent = 'Benvenuto nel tuo Account Google';
} else {
// ALTRIMENTI
    // stampare il messaggio Accesso Negato
    messageContent = 'Siamo spiacenti, la tua email non è valia.';
}

messageElement.append(messageContent);
