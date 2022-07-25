const buttonElement = document.querySelector('button');
const messageElement = document.querySelector('div');
let message;

// genera un numero random da 1 a 6 per il giocatore
const playerRandomNumber = Math.floor( Math.random() * 5 ) + 1;
// genera un numero random da 1 a 6 per il computer
const computerRandomNumber = Math.floor( Math.random() * 5 ) + 1;

buttonElement.addEventListener('click', function () {
    // SE numero del giocatore > numero del computer
    if (playerRandomNumber > computerRandomNumber) {
        // stampare in console Hai vinto
        message = 'Hai vinto';
    } else if (playerRandomNumber < computerRandomNumber) {
    // ALTRIMENTI SE numero del giocatore < numero del computer
        // stampare in console Hai perso
        message = 'Hai perso';
    } else {
    // ALTRIMENTI
        // stampare in console Pareggio
        message = 'Pareggio';
    }

    messageElement.innerHTML = `
    <h1>${message}</h1>
    <p>In tuo numero è: ${playerRandomNumber}</p>
    <p>Il numero del computer è: ${computerRandomNumber}</p>`;
})