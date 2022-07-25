const ulElement = document.querySelector('p');
let liContent = '';

// creare una lista di elementi
const list = ['acqua', 'lattte', 'yogurt', 'coca-cola', 'pasta', 'farina', 'caffè', 'biscotti'];

// stampa gli ultimi 5 elementi dell'array
for (let i = list.length - 1; i >= list.length - 5; i-- ) {
    const currentElement = list[i];

    if (currentElement !== undefined) {
        liContent += currentElement + ' ';
        console.log(i, currentElement);
    }
}

ulElement.append(liContent);