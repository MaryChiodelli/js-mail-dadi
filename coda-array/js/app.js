// creare una lista di elementi
const list = ['acqua', 'lattte', 'yogurt', 'coca-cola', 'pasta', 'farina', 'caffè', 'biscotti'];
console.log(list);

// stampa gli ultimi 5 elementi dell'array
for (let i = list.length - 1; i >= list.length - 5; i-- ) {
    console.log(i, list[i]);
}

// creare una lista di elementi
const list2 = ['acqua', 'lattte', 'yogurt', 'coca-cola'];
console.log(list2);

// stampa gli ultimi 5 elementi dell'array
for (let i = list2.length - 1; i >= list2.length - 5; i-- ) {
    console.log(i, list2[i]);
}