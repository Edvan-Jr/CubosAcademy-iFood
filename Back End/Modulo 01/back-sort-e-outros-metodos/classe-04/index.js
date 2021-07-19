const palavras = ['livro', 'canet', 'sol', 'carro', 'orelh'];

function maisQ5(array) {
    if (array.some(palavra => palavra.length > 5)) {
        console.log(`existe palavra inválida`);
    } else {
        console.log(`array validado`)
    }
}

maisQ5(palavras);