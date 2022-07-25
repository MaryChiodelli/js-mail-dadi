const ulElement = document.querySelector('p');
let liContent = '';

// creare una lista di elementi
const list = ['acqua', 'lattte', 'yogurt', 'coca-cola', 'pasta', 'farina', 'caffè', 'biscotti'];
console.log(list);

// stampa gli ultimi 5 elementi dell'array
for (let i = list.length - 1; i >= list.length - 5; i-- ) {
    const currentElement = list[i];
    liContent += currentElement + ' ';
    console.log(currentElement);
}

ulElement.append(liContent);