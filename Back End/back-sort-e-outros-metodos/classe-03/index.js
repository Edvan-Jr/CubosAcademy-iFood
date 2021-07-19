const numeros = [1, 9, -76, 0, 12, 19, 5, 60, 44];

function maior(array) {
    return array.reduce((acc, item) => (item > acc ? acc = item : acc));
}

console.log(maior(numeros));