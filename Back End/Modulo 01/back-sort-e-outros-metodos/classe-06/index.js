const numeros = [0, 122, 4, 6, 8, 44];

function tudoPar(array) {
    if (array.every(x => x % 2 === 0)) {
        console.log(`array válido`);
    } else {
        console.log(`array inválido`)
    }
}

tudoPar(numeros);