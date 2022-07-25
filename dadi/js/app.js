// genera un numero random da 1 a 6 per il giocatore
const playerRandomNumber = Math.floor( Math.random() * 5 ) + 1;
// genera un numero random da 1 a 6 per il computer
const computerRandomNumber = Math.floor( Math.random() * 5 ) + 1;

console.log(playerRandomNumber, computerRandomNumber);

// SE numero del giocatore > numero del computer
if (playerRandomNumber > computerRandomNumber) {
    // stampare in console Hai vinto
    console.log('Hai vinto');
} else if (playerRandomNumber < computerRandomNumber) {
// ALTRIMENTI SE numero del giocatore < numero del computer
    // stampare in console Hai perso
    console.log('Hai perso');
} else {
// ALTRIMENTI
    // stampare in console Pareggio
    console.log('Pareggio');
}