const notas = [6, 20, 33, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33];

const arraySemRepeticao = [];

notas.forEach(nota => {
    const existe = arraySemRepeticao.find(valor => valor == nota);
    if (!existe) {
        arraySemRepeticao.push(nota);
    }
});

console.log(arraySemRepeticao);