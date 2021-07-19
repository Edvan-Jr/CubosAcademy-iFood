const numeros = [54, 22, 14, 87, 10, 284];
let encontrado = false;
for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] == 10) {
        encontrado = true;
        console.log(`O número '10' foi encontrado na posição ${i}`);
        break;
    }
}
if (!encontrado) {
    console.log("'10' não encontrado.")
}

