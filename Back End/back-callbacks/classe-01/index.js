const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const ate8 = cidades.filter(x => x.length <= 8);

const ate8Strg = ate8.join(', ');
console.log(ate8Strg);