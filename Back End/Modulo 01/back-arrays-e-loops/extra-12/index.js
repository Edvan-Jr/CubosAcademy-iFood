const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];
let lotado = false;
let contador = 0;
while (!lotado) {
    for (let pessoa of filaDeFora) {
        filaDeDentro.push(pessoa);
        contador++;
        if (filaDeDentro.length == 5) {
            lotado = true;
            break;
        }
    }
}
for (let i = 1; i <= contador; i++) {
    filaDeFora.shift();
}
console.log(filaDeDentro);
console.log(filaDeFora);
