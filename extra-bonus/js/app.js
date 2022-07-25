// chiedere all'utente quanti elementi dovrà contenere l'array
let userCounter = parseInt(prompt('Di qunati numeri hai bisogno?'));
userCounter = Math.abs(userCounter);

// creare array di numeri casuali in base al numero ricevuto
let randomNumberList = [];

if (isNaN(userCounter)) {
    alert('I dati inseriti non sono corretti.')
} else {
    for (let i = 0; i < userCounter; i++) {
        const randomNumber = Math.floor( Math.random() * 100 ) + 1;
        randomNumberList.push(randomNumber);
    }
    
    console.log(userCounter, randomNumberList)
}