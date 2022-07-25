// creare una lista di elementi
const list = ['acqua', 'lattte', 'yogurt', 'coca-cola', 'pasta', 'farina', 'caffè', 'biscotti'];
console.log(list);

// stampa gli ultimi 5 elementi dell'array
for (let i = (list.length) - 1 ; i >= 3; i-- ) {
    console.log(i, list[i]);
}