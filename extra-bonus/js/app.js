const messageElement = document.querySelector('p');
let messageContent = '';

// chiedere all'utente quanti elementi dovrà contenere l'array
let userCounter = parseInt(prompt('Di qunati numeri hai bisogno?'));
userCounter = Math.abs(userCounter);

// chiedere all'utente quanti elementi verranno estratti dal fondo dell'array
let extractCounter = parseInt(prompt('Quanti numeri vuoi estrarre?'));
extractCounter = Math.abs(extractCounter);

// creare array di numeri casuali in base al numero ricevuto
let randomNumberList = [];
let newRandomNumberList = [];

if (isNaN(userCounter) || isNaN(extractCounter)) {
    alert('I dati inseriti non sono corretti.')
} else {    
    for (let i = 0; i < userCounter; i++) {
        const randomNumber = Math.floor( Math.random() * 100 ) + 1;
        randomNumberList.push(randomNumber);
    }
    
    for (let i = userCounter - 1; i >= extractCounter; i--) {
        const currentNumber = randomNumberList[i];
        newRandomNumberList.push(currentNumber);
        messageContent += currentNumber + ' ';
    }
}

messageElement.append(messageContent);

console.log(userCounter, extractCounter, randomNumberList, newRandomNumberList);