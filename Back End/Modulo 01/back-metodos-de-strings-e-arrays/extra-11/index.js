const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 0;

function seq3(lista, i) {
    let resultado = lista.slice(i, i + 3);
    console.log(resultado);
}

seq3(nomes, posicao);