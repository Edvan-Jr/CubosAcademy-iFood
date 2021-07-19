const nomes = ['Maria', 'João', 'José', 'Antonio', 'Beatriz', 'Camila', 'amanda'];

/*const filtrado = nomes.filter(x => x.)*/

const arrayFiltrado = nomes.filter(x => x.substr(0, 1).toLowerCase() == 'a');

console.log(arrayFiltrado);