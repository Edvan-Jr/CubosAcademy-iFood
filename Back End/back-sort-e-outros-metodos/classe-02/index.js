const cidades = ['Campos de Jordão', 'Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

function maior(array) {
    return array.reduce((acc, item) => (item.length > acc.length ? acc = item : acc));
}

console.log(maior(cidades));